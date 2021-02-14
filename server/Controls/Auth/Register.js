const User = require("../../Models/User");
const bcrypt = require("bcrypt");

// hash password function
const Hash = async (password) => {
  const salt = await bcrypt.genSalt();
  return bcrypt.hash(password, salt);
};

const register = async (req, res) => {
  try {
    const {
      username,
      firstname,
      lastname,
      email,
      password,
      password2,
      role,
    } = req.body;
    //check if the field is exist
    if (
      !username ||
      !lastname ||
      !firstname ||
      !password ||
      !password2 ||
      !email ||
      !role
    )
      res.status(400).json({ msg: "the field is required" });
    //check username length
    if (username.length < 6)
      res
        .status(400)
        .json({ msg: "username most be greater than 5 character" });

    //check password length
    if (password.length < 6)
      res.status(400).json({ msg: "password most be greater than 5 digit" });

    //check password match
    if (password !== password2)
      res.status(400).json({ msg: "password not match" });

    //check if email already exist in database
    const user_email = await User.findOne({ email });
    if (user_email) res.status(400).json({ msg: "account already exist " });

    //check if username already exist in database
    const user_username = await User.findOne({ username });
    if (user_username)
      res.status(400).json({ msg: "username has been choice" });

    //save user to database
    const hashpassword = await Hash(password);
    console.log(hashpassword);
    const user = new User({
      email,
      username,
      role,
      firstname,
      lastname,
      password: hashpassword,
    });
    const response = await user.save();
    if (!response)
      res.status(400).json({ msg: "error occur during saving to database" });
    res.json({ msg: "user register successful" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

module.exports = register;
