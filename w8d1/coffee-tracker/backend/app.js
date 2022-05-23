const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

const coffeeDrinks = {
  0: {
    id: 0,
    time: "2022-05-23T10:00:00",
    amount: 500,
    beans: "Yergacheffe",
    technique: "Espresso",
  },
};
let lazyId = 1;

app.get("/api/coffee-drinks", (req, res) => {
  res.json(coffeeDrinks);
});

app.post("/api/coffee-drinks", (req, res) => {
  const newCoffeeDrink = { ...req.body, id: lazyId };

  coffeeDrinks[lazyId] = newCoffeeDrink;

  res.json(newCoffeeDrink);

  lazyId++;
});

app.delete("/api/coffee-drinks/:id", (req, res) => {
  const id = req.params.id;
  console.log(req.body);
  delete coffeeDrinks[id];

  res.send("ok.");
});

module.exports = app;
