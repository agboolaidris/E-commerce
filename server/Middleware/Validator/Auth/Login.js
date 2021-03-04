const User = require("../../../Models/User");
const bcrypt = require("bcrypt");

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email) return res.status(400).json({ msg: "email is required" });
    if (!password) return res.status(400).json({ msg: "password is required" });

    const user = await User.findOne({ email });
    if (!user) res.status(401).json({ msg: "invalid credentials" });

    const isMatch = bcrypt.compare(password, user.password);
    if (!isMatch)
      res.status(401).json({ msg: `email or password doesn't match` });

    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ msg: error.message });
  }
};

module.exports = login;
