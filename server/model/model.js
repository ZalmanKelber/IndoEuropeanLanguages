const mongoose = require("mongoose");

const branchSchema = new mongoose.Schema({
    name: String,
    geographicExpanse: String,
    languages: [String]
});

module.exports = new mongoose.model("Branch", branchSchema);