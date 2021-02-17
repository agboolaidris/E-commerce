const jwt = require("jsonwebtoken");

const authorize = (req, res, next) => {
  const cookie = req.cookies["access-token"];
  if (!cookie) res.status(401).json({ msg: "unathorize" });
  const verify = jwt.verify(cookie, process.env.JWT_SECRET);
  if (!verify) res.status(400).json({ msg: "unathorized,user verified fail" });
  const id = verify.id;
  req.userID = id;
  next();
};

module.exports = authorize;
