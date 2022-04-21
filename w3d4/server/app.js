const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");
const logger = require("morgan");

const app = express();
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser()); //req.cookies res.cookie()
app.use(
  // req.session
  cookieSession({
    name: "session",
    keys: [
      "I like keys that are sentences because they're easy to remember and hahahaha.",
    ],
  })
);

app.use(express.static(path.join(__dirname, "public")));

const user1 = {
  name: "Dimitri Ivanovich Mendeleiv",
  email: "periodic@table.com",
  password: "hydrogen",
  secret: "Actually prefers biology over chemistry",
};

const user2 = {
  name: "Neil Armstrong",
  email: "first@moon.com",
  password: "nasa",
  secret: "Afraid of heights",
};

const listOfUsers = {
  "periodic@table.com": user1,
  "first@moon.com": user2,
};

app.get("/", (req, res) => {
  return res.render("index");
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!listOfUsers[email]) {
    console.log("BAD EMAIL");
    return res.redirect("/");
  }

  if (listOfUsers[email].password !== password) {
    console.log("BAD PASSWORD");
    return res.redirect("/");
  }

  const currentUser = listOfUsers[email];

  console.log("Logged is with email", currentUser.email);
  // res.cookie("email", email);
  req.session.email = email;
  return res.redirect("/secret");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.get("/secret", (req, res) => {
  if (!req.session.email) {
    return res.redirect("/");
  }

  const templateVars = {
    name: listOfUsers[req.session.email].name,
    secret: listOfUsers[req.session.email].secret,
  };

  return res.render("secret", templateVars);
});

module.exports = app;
