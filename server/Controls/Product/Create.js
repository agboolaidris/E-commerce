const Product = require("../../Models/Product");
const Slug = require("slugify");
const Create = async (req, res) => {
  try {
    if (req.userRole !== "admin")
      return res
        .status(400)
        .json({ msg: "request denied, only admin is authorized" });
    const { price, decription, category, name } = req.body;

    let images = [];
    if (req.files) {
      images = req.files.map((file) => file.filename);
    }
    const product = new Product({
      name,
      slug: Slug(name),
      price,
      createdBy: req.userID,
      decription,
      images,
      category,
    });
    const response = await product.save();
    if (!response)
      return res.status(500).json({ msg: "the request not save in databse" });
    res.json(response);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

module.exports = Create;
