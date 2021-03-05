const User = require("../../Models/Product");
const path = require("path");
const Create = async (req, res) => {
  try {
    console.log(path.dirname(__dirname));

    res.json({ file: req.file, body: req.body });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

module.exports = Create;
