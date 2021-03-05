const Route = require("express").Router();
const Authorize = require("../Middleware/authorize");
const Multer = require("multer");
var upload = Multer({ dest: "uploads/" });

Route.post(
  "/",
  [Authorize, upload.single("images")],
  require("../Controls/Product/Create")
);
module.exports = Route;
