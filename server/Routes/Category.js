const Route = require("express").Router();
const Category = require("../Models/Category");

Route.post("/create", async (req, res) => {
  try {
    const categoryObj = {
      name: req.body.name,
      slug: req.body.slug,
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
});
module.exports = Route;
