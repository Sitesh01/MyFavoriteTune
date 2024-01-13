const express = require("express");
const connectDB = require("./config/connectDB");
const dotenv = require("dotenv");
const songRoutes = require("./routes/songsRoute");
const artistRoutes = require("./routes/artistRoute");
const ejs = require("ejs");
const path = require("path");

dotenv.config();
const app = express();
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

connectDB();

app.use("/songs", songRoutes);
app.use("/artists", artistRoutes);

const port = process.env.PORT || 5050;

app.get("/", async (req, res) => {
  try {
    const result = await fetch(`${process.env.BASE_URL}/songs`);
    console.log(result);
    const songs = await result.json();

    console.log("Hello from Songs console", songs);
    res.render("songList", { songs: songs.data });
  } catch (error) {
    res.send("<h1>Internal Server Error!</h1>");
  }
});
app.listen(port, () => {
  console.log("Server is running");
});
