const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

const branchSchema = require("./schema/schema");
const resolvers = require("./resolver/resolver");

dotenv.config();
const app = express();

const mongoUri = `mongodb+srv://ZalmanKelber:${process.env.PASSWORD}@cluster0.ativt.mongodb.net/indoeuropeandev?retryWrites=true&w=majority`
mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB connected")).catch(err => console.log("error:", err));

app.get("/", (req, res) => {
    res.send("Hello from Server");
});

app.use("/graphql", graphqlHTTP({
    schema: branchSchema,
    rootValue: resolvers,
    graphiql: true
}));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});