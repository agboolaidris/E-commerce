const Route = require("express").Router();
const Authorize = require("../Middleware/authorize");
const Multer = require("multer");
const shortid = require("shortid");
const path = require("path");

const storage = Multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(path.dirname(__dirname), "uploads"));
  },
  filename: function (req, file, cb) {
    cb(null, shortid.generate() + "-" + file.originalname);
  },
});
const upload = Multer({ storage });

Route.post(
  "/",
  [Authorize, upload.array("images")],
  require("../Controls/Product/Create")
);
module.exports = Route;
