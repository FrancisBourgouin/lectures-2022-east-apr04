// HTTP Server

// Status messages from server:
// 10x -> In progress
// 20x -> Everything good
// 30x -> Redirect
// 40x -> We got lost / no permission (user problem)
// 50x -> Server got mad

// Request : Client to Server
// Response : Server to Client

const http = require("http");

const someObject = {
  name: "Petit Poulet",
  avatar: "🐔",
  createdOn: new Date(),
};
const anotherObject = {
  name: "Potato",
  avatar: "🥔",
  createdOn: new Date(),
};

const stringifiedSomeObject = JSON.stringify(someObject);
const stringifiedAnotherObject = JSON.stringify(anotherObject);

// console.log(someObject, stringifiedSomeObject);

const serverActions = (req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  // res.writeHead(200, { "Content-Type": "text/html" });
  const currentUrl = req.url;

  if (currentUrl === "/potato") {
    return res.end(stringifiedAnotherObject);
  }
  return res.end(stringifiedSomeObject);
};

const server = http.createServer(serverActions);

server.listen(8000);

// feature/login
// feature/potato
