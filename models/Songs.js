const mongoose = require("mongoose");

const songsSchema = mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  artistname: {
    type: String,
    ref: "Artist",
    required: true,
  },
});

module.exports = mongoose.model("Songs", songsSchema);
