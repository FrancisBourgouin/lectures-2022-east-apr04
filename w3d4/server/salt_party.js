require("dotenv").config();
const bcrypt = require("bcryptjs");

const password = "1234";

console.log(password);

const salt = bcrypt.genSaltSync(10);
console.log(salt);

console.log(bcrypt.hashSync(password, salt));
console.log(bcrypt.hashSync(password, salt));

console.log("not using salt var");

console.log(bcrypt.hashSync(password, bcrypt.genSaltSync(10)));
console.log(bcrypt.hashSync(password, bcrypt.genSaltSync(10)));

console.log("use 10!");

console.log(bcrypt.hashSync(password, 10));
console.log(bcrypt.hashSync(password, 10));

console.log("env vars");

console.log(bcrypt.hashSync(password, process.env.SALT));
console.log(bcrypt.hashSync(password, process.env.SALT));
