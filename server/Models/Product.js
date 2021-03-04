const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    slug: { type: String, unique: true, required: true },
    decription: { type: String, required: true },
    price: { type: Number },
    offer: { type: Number },
    images: [{ image: { type: String } }],
    category: { type: mongoose.Schema.Types.ObjectId, ref: "category" },
    reviews: [
      { userId: mongoose.Schema.Types.ObjectId, ref: "user", review: String },
    ],
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    updateAt: Date,
  },
  { timestamps: true }
);
