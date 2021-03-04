const User = require("../../../Models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const generator = (id) => {
  return jwt.sign(id, process.env.JWT_SECRET);
};

const login = async (req, res) => {
  try {
    const user = req.user;

    if (user.role !== "user")
      return res
        .status(400)
        .json({ msg: "this credential doesn't register as an user" });

    const token = await generator({ id: user._id });

    res.cookie("access-token", token, {}).json({ msg: "user login", token });
  } catch (error) {
    res.status(401).json({ msg: error.message });
  }
};

module.exports = login;
