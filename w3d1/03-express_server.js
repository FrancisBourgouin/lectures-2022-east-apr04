// Basic express server wo/ EJS

const express = require("express");
const users = require("./users");

const server = express();
const PORT = 8000;

// In the event of a GET request asking for /
server.get("/", (req, res) => {
  return res.send("Hello!");
});

server.get("/users", (req, res) => {
  res.send(JSON.stringify(users));
  return res.json(users);
});

const someFunction = (name) => {
  console.log(name);
};

server.get("/users/:user_id", (req, res) => {
  const userId = req.params.user_id; // Params is the parameters of the url
  if (users[userId]) {
    const name = users[userId].name;
    return res.json(name);
  }
  return res.send("NO USER WITH THAT ID");
});

server.get("/users/:user_id/pantry", (req, res) => {
  const userId = req.params.user_id; // Params is the parameters of the url
  if (users[userId]) {
    const pantry = users[userId].pantry;
    return res.json(pantry);
  }
  // return res.send("NO USER WITH THAT ID");
  return res.redirect("/");
});

server.listen(PORT, () => {
  console.log("Server is listening");
});
