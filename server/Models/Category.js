const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    name: { type: String, trim: true, required: true },
    slug: { type: String, unique: true, required: true },
    parentId: { type: String },
  },
  { timestamps: true }
);

const User = mongoose.model("category", schema);

module.exports = User;
