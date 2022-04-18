// HTTP Server w/ Routing

const http = require("http");
// const users = {
//   1:{
//     id: "1",
//     name: "Big Dino",
//     pantry: {
//       meat: 1,
//       smallDino: 3,
//     },
//   },
//   2:{
//     id: "2",
//     name: "Big Dog",
//     pantry: {
//       bones: 2,
//       kibble: 5,
//     },
//   }
// }

const user1 = {
  id: "1",
  name: "Big Dino",
  pantry: {
    meat: 1,
    smallDino: 3,
  },
};
const user2 = {
  id: "2",
  name: "Big Dog",
  pantry: {
    bones: 2,
    kibble: 5,
  },
};

const users = {
  1: user1,
  2: user2,
};

// /users/1 (info but no pantry)
// /users/1/pantry (pantry)

const server = http.createServer((req, res) => {
  // Split the incoming url with .split("/")
  const urlValues = req.url.split("/");
  const isUsers = urlValues[1] === "users";
  const userId = urlValues[2];
  const isPantry = !!urlValues[3];
  // If statements to split between what we want

  if (!isUsers) {
    const responseContent = JSON.stringify({
      error: "Route not defined for:",
      route: urlValues[1],
    });
    return res.end(responseContent);
  }

  if (isPantry) {
    try {
      const responseContent = JSON.stringify(users[userId].pantry);
      return res.end(responseContent);
    } catch (err) {
      return res.end(JSON.stringify({ message: "SAD ERROR DOESNT EXIST" }));
    }
  }

  if (userId) {
    try {
      const responseContent = JSON.stringify(users[userId].name);
      return res.end(responseContent);
    } catch (err) {
      return res.end(JSON.stringify({ message: "SAD ERROR DOESNT EXIST" }));
    }
  }
});

server.listen(8000);
