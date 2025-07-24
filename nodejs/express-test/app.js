const express = require("express");
const app = express();

const token = null;

// app.get("/", (req, res) => {
//   res.send("hello noona world");
// });

// app.get("/about", (req, res) => {
//   res.send("this is all about express");
// });

const checkAuth = (req, res, next) => {
  console.log("she has admin permission");
  next();
};

const checkToken = (res, next, req) => {
  if (token) {
    next();
  }
  console.log("you don't have token");
};

const getUser = (req, res) => {
  res.send("here is user info");
};

app.get("/users", checkAuth, checkToken, getUser);

app.listen(5000, () => {
  console.log("Server is on 5000");
});
