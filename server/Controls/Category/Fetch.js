const Category = require("../../Models/Category");

const fetch = async (req, res) => {
  try {
    const response = await Category.find();
    if (!response)
      return res.status(401).json({ msg: "nothing found in database" });
    res.json(response);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
module.exports = fetch;
