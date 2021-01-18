const Branch = require("../model/model");

const branches = [
    { id: 1, name: "Germanic", geographicExpanse: "Northern Europe", languages: ["English", "German"], imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Germanic_languages.svg/1200px-Germanic_languages.svg.png" },
    { id: 2, name: "Italic", geographicExpanse: "Southern Europe", languages: ["Spanish", "French", "Italian"], imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Romance_Languages-World-Map.png" },
    { id: 3, name: "Hellenic", geographicExpanse: "Greece", languages: ["Greek"], imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Idioma_Griego.PNG" },
    { id: 4, name: "Albanian", geographicExpanse: "Albania", languages: ["Albanian"], imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Albanian_dialects.svg" },
    { id: 5, name: "Balto-Slavonic", geographicExpanse: "Eastern Europe and Siberia", languages: ["Russian", "Polish", "Lithuanian"], imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Balto_Slavic_countries.svg/1200px-Balto_Slavic_countries.svg.png" },
    { id: 6, name: "Armenian", geographicExpanse: "Armenia", languages: ["Armenian"], imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Armenian_Language_distribution_map.png" },
    { id: 7, name: "Indo-Iranian", geographicExpanse: "Middle East and South Asia", languages: ["Hindi", "Farsi", "Bengali", "Punjabi", "Kurdish"], imageUrl: "https://cdn.britannica.com/19/49419-050-368625DF/Distribution-Indo-Iranian-languages.jpg" },
    { id: 8, name: "Celtic", geographicExpanse: "Brittish Isles and France", languages: ["Breton", "Welsh", "Gaelic"], imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Celtic_languages_distribution_map.svg" },
]

const resolvers = {
    branches: () => {
        return Branch.find({});
    },
    branchByName: ({ name }) => {
        return Branch.findOne({ name })
    },
    addBranch: args => {
        const branch = new Branch({
            name: args.name,
            geographicExpanse: args.geographicExpanse,
            languages: args.languages.split(", ")
        });
        branch.save();
        return branch;
    }
}

module.exports = resolvers;