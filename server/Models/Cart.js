const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
  cartItem: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "product",
        require: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      price: {
        type: Number,
        require: true,
      },
    },
  ],
});

const Cart = mongoose.model("cart", schema);

module.exports = Cart;
