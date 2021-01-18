const { buildSchema } = require("graphql");

const branchSchema = buildSchema(`
    type Query {
        branches: [Branch]
    }

    type Mutation {
        addBranch(name: String, geographicExpanse: String, languages: String): Branch
    }

    type Branch {
        name: String,
        geographicExpanse: String,
        languages: [String]
    }
`);

module.exports = branchSchema;