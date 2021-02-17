const User = require("../../Models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const generator = (id) => {
  return jwt.sign(id, process.env.JWT_SECRET);
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if ((!email, !password))
      res.status(400).json({ msg: "the field is required" });
    const user = await User.findOne({ email });
    if (!user) res.status(401).json({ msg: "invalid credentials" });
    const isMatch = bcrypt.compare(password, user.password);
    if (!isMatch)
      res.status(401).json({ msg: `email or password doesn't match` });
    const token = await generator({ id: user._id });

    res.cookie("access-token", token, {}).json({ msg: "user login", token });
  } catch (error) {
    res.status(401).json({ msg: error.message });
  }
};

module.exports = login;
