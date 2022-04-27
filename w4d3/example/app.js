const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const axios = require("axios");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// JSON
app.get("/timezone/heron", (req, res) => {
  res.json({ timezone: -12 });
});

// HTML
app.get("/weather/london", (req, res) => {
  let chunkOfHTML = "";
  chunkOfHTML += "<section>";
  chunkOfHTML += "<h1>WEATHER FOR LONDON</h1>";
  chunkOfHTML += "<h1>-1c, cloudy</h1>";
  chunkOfHTML += "</section>";

  res.send(chunkOfHTML);
});

app.post("/register", (req, res) => {
  let id = Math.floor(Math.random() * 1000);
  const { name, email, password, quirky } = req.body;

  setTimeout(() => {
    if (!name || !email || !password) {
      return res.json({ error: "Some of fields are empty" });
    }
    return res.json({ id, name, email, quirky });
  }, 2000);
});

app.get("/api/openweather/:cityName", (req, res) => {
  const { cityName } = req.params;
  const APIKEY = "09fd719b4b698ec0260e424f83378e3d";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKEY}`;

  axios.get(url).then((data) => res.json(data.data));
});

// XML

module.exports = app;
