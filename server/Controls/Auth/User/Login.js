const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  try {
    const user = req.user;

    if (user.role !== "user")
      return res
        .status(400)
        .json({ msg: "this credential doesn't register as an user" });

    const token = await jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET
    );

    res.cookie("access-token", token, {}).json({ msg: "user login", token });
  } catch (error) {
    res.status(401).json({ msg: error.message });
  }
};

module.exports = login;
