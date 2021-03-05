const Route = require("express").Router();
const Authorize = require("../Middleware/authorize");

Route.post("/", [Authorize], require("../Controls/Product/Create"));
module.exports = Route;
