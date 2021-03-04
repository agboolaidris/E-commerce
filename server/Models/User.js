const mongoose = require("mongoose");
const schema = mongoose.Schema;

const user = new schema(
  {
    firstname: { type: String, required: true, trim: true, min: 3, max: 20 },
    lastname: { type: String, required: true, trim: true, min: 3, max: 20 },
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    role: { type: String, enum: ["admin", "user"], required: true },
    password: { type: String, required: true, unique: true },
    contact: { type: String },
    image: { type: String },
    resetpasswordToken: { type: String },
    resetpasswordExpire: { type: Date },
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", user);
