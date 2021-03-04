const Route = require("express").Router();
const adminRegister = require("../Controls/Auth/Admin/Register");
const adminLogin = require("../Controls/Auth/Admin/Login");
const register = require("../Controls/Auth/User/Register");
const login = require("../Controls/Auth/User/Login");
const authorize = require("../Middleware/authorize");
const { RegisterValidator } = require("../Middleware/Validator/Auth");
//register route
Route.post("/admin/register", [RegisterValidator], adminRegister);
Route.post("/user/register", [RegisterValidator], register);
Route.post("/admin/login", adminLogin);
Route.post("/user/login", login);
Route.get("/", [authorize], (req, res) => {
  res.json({ msg: "authorise" });
});
module.exports = Route;
