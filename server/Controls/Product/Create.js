const User = require("../../Models/Product");
const Create = async (req, res) => {
  try {
    res.json({ msg: "create" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

module.exports = Create;
