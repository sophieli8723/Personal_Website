const mongoose = require("mongoose");

var websiteSchema = new mongoose.Schema({
    image: String,
    caption: String,
    url: String,
    type: String
});

module.exports = mongoose.model("Website", websiteSchema);