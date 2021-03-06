const Route = require("express").Router();
const Authorize = require("../Middleware/authorize");

Route.post("/", [Authorize], require("../Controls/Cart/create"));

module.exports = Route;
