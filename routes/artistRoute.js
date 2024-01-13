const express = require("express");
const Artist = require("../models/Artist");

const router = express.Router();

router.get("/", async (req, res) => {
  const artists = await Artist.find();
  const artistWithSongCount = await Promise.all(
    artists.map(async (artist) => {
      const songCount = await Song.countDocuments({
        artistname: artist.artistname,
      });
      return { ...artist.toObject(), songCount };
    })
  );
  res.send(artistWithSongCount);
});

module.exports = router;
