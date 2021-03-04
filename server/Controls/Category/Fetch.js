const Category = require("../../Models/Category");

const category = (data, parentId = null) => {
  let categorylist = [];
  let list;
  if (!parentId) {
    list = data.filter((e) => e.parentId == undefined);
  } else {
    list = data.filter((e) => e.parentId == parentId);
  }
  list.forEach((element) =>
    categorylist.push({
      _id: element._id,
      name: element.name,
      slug: element.slug,
      children: category(data, element._id),
    })
  );

  return categorylist;
};

const fetch = async (req, res) => {
  try {
    const data = await Category.find();
    if (!data)
      return res.status(401).json({ msg: "nothing found in database" });
    const response = category(data);
    res.json(response);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
module.exports = fetch;
