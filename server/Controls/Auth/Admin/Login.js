const User = require("../../../Models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const generator = (id) => {
  return jwt.sign(id, process.env.JWT_SECRET);
};

const login = async (req, res) => {
  try {
    const user = req.user;
    console.log(user);
    if (user.role !== "admin")
      return res
        .status(400)
        .json({ msg: "this credential doesn't register as an admin" });

    const token = await generator({ id: user._id });
    res
      .cookie("access-token", token, { httpOnly: true })
      .json({ msg: "login successful", token });
  } catch (error) {
    res.status(401).json({ msg: error.message });
  }
};

module.exports = login;
