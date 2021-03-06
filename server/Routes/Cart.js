const Route = require("express").Router();

Route.post("/", [], require("../Controls/Cart/create"));

module.exports = Route;
