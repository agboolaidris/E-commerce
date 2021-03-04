const User = require("../../Models/User");

exports.RegisterValidator = async (req, res, next) => {
  try {
    const {
      username,
      firstname,
      lastname,
      email,
      password,
      password2,
    } = req.body;

    //check if the field is exist
    if (!email) return res.status(400).json({ msg: "email is required" });
    if (!username) return res.status(400).json({ msg: "username is required" });
    if (!firstname)
      return res.status(400).json({ msg: "Firstname is required" });
    if (!lastname) return res.status(400).json({ msg: "Lastname is required" });
    if (!password) return res.status(400).json({ msg: "password is required" });

    //check username length
    if (username.length < 6)
      return res
        .status(400)
        .json({ msg: "username most be greater than 5 character" });

    //check password length
    if (password.length < 6)
      return res
        .status(400)
        .json({ msg: "password most be greater than 5 digit" });

    //check password match
    if (password !== password2)
      return res.status(400).json({ msg: "password not match" });

    //check if email already exist in database
    const user_email = await User.findOne({ email });
    if (user_email)
      return res.status(400).json({ msg: "account already exist " });

    //check if username already exist in database
    const user_username = await User.findOne({ username });
    if (user_username)
      return res
        .status(400)
        .json({ msg: "account with such username is exist" });
    next();
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
