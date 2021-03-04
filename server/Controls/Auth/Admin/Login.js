const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  try {
    const user = req.user;
    if (user.role !== "admin")
      return res
        .status(400)
        .json({ msg: "this credential doesn't register as an admin" });

    const token = await jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res
      .cookie("access-token", token, { httpOnly: true })
      .json({ msg: "login successful", token });
  } catch (error) {
    res.status(401).json({ msg: error.message });
  }
};

module.exports = login;
