const Route = require("express").Router();
const authorize = require("../Middleware/authorize");
const RegisterValidator = require("../Middleware/Validator/Auth/Register");
const LoginValidator = require("../Middleware/Validator/Auth/Login");

//register route
Route.post(
  "/admin/register",
  [RegisterValidator],
  require("../Controls/Auth/Admin/Register")
);
Route.post(
  "/user/register",
  [RegisterValidator],
  require("../Controls/Auth/User/Register")
);
Route.post(
  "/admin/login",
  [LoginValidator],
  require("../Controls/Auth/Admin/Login")
);
Route.post(
  "/user/login",
  [LoginValidator],
  require("../Controls/Auth/User/Login")
);

module.exports = Route;
