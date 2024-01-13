const mongoose = require("mongoose");

const artistSchema = mongoose.Schema({
  artistname: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Artist", artistSchema);
