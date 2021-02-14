const register = require("../Controls/Auth/Register");
const Route = require("express").Router();

//register route
const Register = Route.post("/register", register);

module.exports = Route;
