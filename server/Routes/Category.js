const Route = require("express").Router();
const authorize = require("../Middleware/authorize");

Route.post("/", [authorize], require("../Controls/Category/Create"));
Route.get("/", require("../Controls/Category/Fetch"));
module.exports = Route;
