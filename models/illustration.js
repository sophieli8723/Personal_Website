const mongoose = require("mongoose");

var illustrationSchema = new mongoose.Schema({
    image: String,
    caption: String,
    type: String,
});

module.exports = mongoose.model("Illustration", illustrationSchema);