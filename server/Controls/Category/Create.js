const Category = require("../../Models/Category");
const slug = require("slugify");

const create = async (req, res) => {
  try {
    if (req.userRole !== "admin")
      return res
        .status(400)
        .json({ msg: "Access denied, only admin is required " });
    const categoryObj = {
      name: req.body.name,
      slug: slug(req.body.name),
    };

    if (req.body.parentId) {
      categoryObj.parentId = req.body.parentId;
    }
    const category = new Category(categoryObj);
    const response = await category.save();
    if (!response)
      return res
        .status(500)
        .json({ msg: "the user does not save into database" });

    res.json(response);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

module.exports = create;
