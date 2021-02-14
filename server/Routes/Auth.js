const register = require("../Controls/Auth/Register");

const Route = require("express").Router();
const Register = Route.post("/register");
module.exports = Route;
