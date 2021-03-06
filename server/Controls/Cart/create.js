const Cart = require("../../Models/Cart");
const Create = async (req, res) => {
  try {
    if (req.userRole !== "user")
      return res
        .status(400)
        .json({ msg: "athorization denied, only user is required" });

    const { cartItems } = req.body;

    //check if user exist
    const userCart = await Cart.findOne({ user: req.userID });

    let cart;
    if (userCart) {
      // check if product available in the cart
      const item = userCart.cartItems.find(
        (e) => e.product == cartItems.product
      );

      if (item) {
        const data = userCart.cartItems.map(
          (e) => e.product == cartItems.product && { ...e, quantity: 200 + 1 }
        );
        console.log(data);
      } else {
        userCart.cartItems.push(cartItems);
      }
      console.log(userCart);
      cart = userCart;
    } else {
      cart = new Cart({ user: req.userID, cartItems });
    }

    //save cart
    const response = await cart.save();
    if (!response) return res.status(400).json({ msg: "server error" });
    res.json(response);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

module.exports = Create;
