const Route = require("express").Router();
const register = require("../Controls/Auth/Register");
const login = require("../Controls/Auth/Login");
const authorize = require("../Middleware/authorize");

//register route
Route.post("/register", register);
Route.post("/login", login);

Route.get("/", [authorize], (req, res) => {
  res.json({ msg: "authorise" });
});
module.exports = Route;
