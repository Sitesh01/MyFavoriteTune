const Song = require("../models/Songs");
const Artist = require("../models/Artist");

exports.getAllSongs = async (req, res) => {
  try {
    const allSongs = await Song.find();
    res.status(200).json({
      Message: "Songs found!!",
      data: allSongs,
    });
  } catch (error) {
    res.status(500).json({
      Message: error.message,
    });
  }
};

exports.createSong = async (req, res) => {
  try {
    const { title, artistname } = req.body;
    console.log(req.body);

    // Find or create the artist
    let artist = await Artist.findOne({ artistname: artistname });
    console.log(artist);
    if (!artist) {
      artist = await Artist.create({ artistname: artistname });
      console.log(artist);
    }

    // Create the song with the reference to the artist
    const song = await Song.create({ title, artistname: artist.artistname });
    console.log(song);

    res.status(200).json({
      Message: "Song successfully created",
      data: song,
    });
  } catch (error) {
    res.status(500).json({
      Message: error.message,
    });
  }
};

exports.getSelectedSong = async (req, res) => {
  try {
    const song = await Song.findById(req.params.id);
    if (!song) {
      res.status(404).json({
        Message: "Song not Found!!",
      });
    }
    res.status(200).json({
      Message: "Songs found!!",
      data: song,
    });
  } catch (error) {
    res.status(500).json({
      Message: error.message,
    });
  }
};
