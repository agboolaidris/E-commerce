const Route = require("express").Router();
const register = require("../Controls/Auth/Admin/Register");
const login = require("../Controls/Auth/Admin/Login");
const authorize = require("../Middleware/authorize");
const { RegisterValidator } = require("../Validator/Auth");
//register route
Route.post("/admin/register", [RegisterValidator], register);
Route.post("/admin/login", login);

Route.get("/", [authorize], (req, res) => {
  res.json({ msg: "authorise" });
});
module.exports = Route;
