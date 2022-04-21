require("dotenv").config();
const express = require("express");
const bcrypt = require("bcryptjs");
const path = require("path");
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");
const logger = require("morgan");

const app = express();
const salt = bcrypt.genSaltSync(10);

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

app.use((req, res, next) => {
  if (!req.session.email && req.path !== "/") {
    console.log("ATTEMPTED PRIVATE PAGE ACCESS");
    return res.redirect("/");
  }
  next();
});

const user1 = {
  name: "Dimitri Ivanovich Mendeleiv",
  email: "periodic@table.com",
  password: bcrypt.hashSync(process.env.USER1_PASSWORD, salt),
  secret: "Actually prefers biology over chemistry",
};

const user2 = {
  name: "Neil Armstrong",
  email: "first@moon.com",
  password: bcrypt.hashSync(process.env.USER2_PASSWORD, salt),
  secret: "Afraid of heights",
};

const listOfUsers = {
  "periodic@table.com": user1,
  "first@moon.com": user2,
};

const generateUserHelpers = require("./helpers/userHelpers");
const { authenticateUser, createUser } = generateUserHelpers(bcrypt, listOfUsers);

console.log(listOfUsers);

app.get("/", (req, res) => {
  return res.render("index");
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const { error, data } = authenticateUser(email, password);

  if (error) {
    console.log(error);
    return res.redirect("/");
  }

  console.log("Logged is with email", data.email);
  // res.cookie("email", email);
  req.session.email = email;

  return res.redirect("/secret");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", (req, res) => {
  const { email, name, password, secret } = req.body;

  // const email = req.body.email;
  // const name = req.body.name;
  // const password = req.body.password;
  // const secret = req.body.secret;

  if (!email || !name || !password || !secret) {
    return res.redirect("/register");
  }

  if (listOfUsers[email]) {
    return res.redirect("/register");
  }

  const newUser = {
    email,
    name,
    secret,
    password: bcrypt.hashSync(password, salt),
  };

  listOfUsers[email] = newUser;

  req.session.email = email;

  return res.redirect("/secret");
});

app.get("/secret", (req, res) => {
  const templateVars = {
    name: listOfUsers[req.session.email].name,
    secret: listOfUsers[req.session.email].secret,
  };

  return res.render("secret", templateVars);
});

module.exports = app;
