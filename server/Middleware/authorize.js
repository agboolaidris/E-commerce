const jwt = require("jsonwebtoken");
const User = require("../Models/User");
const Authorize = async (req, res, next) => {
  try {
    const cookie = req.cookies["access-token"];
    if (!cookie) res.status(401).json({ msg: "unathorize" });
    const verify = jwt.verify(cookie, process.env.JWT_SECRET);
    if (!verify)
      return res.status(400).json({ msg: "unathorized,user verified fail" });
    req.userID = verify.id;
    req.userRole = verify.role;
    next();
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

module.exports = Authorize;
