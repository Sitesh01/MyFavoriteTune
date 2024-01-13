const express = require("express");
const songController = require("../controllers/songController");

const router = express.Router();

router
  .route("/")
  .get(songController.getAllSongs)
  .post(songController.createSong);

router.route("/:id").get(songController.getSelectedSong);

module.exports = router;
