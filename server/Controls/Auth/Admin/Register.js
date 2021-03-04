const User = require("../../../Models/User");
const bcrypt = require("bcrypt");

// hash password function
const Hash = async (password) => {
  const salt = await bcrypt.genSalt();
  return bcrypt.hash(password, salt);
};

const register = async (req, res) => {
  try {
    const { email, username, role, firstname, lastname, password } = req.body;
    //save user to database
    const hashpassword = await Hash(password);

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
      return res
        .status(400)
        .json({ msg: "error occur during saving to database" });

    res.json({ msg: "user register successful" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

module.exports = register;