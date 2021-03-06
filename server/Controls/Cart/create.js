const Cart = require("../../Models/Cart");
const Create = async (req, res) => {
  try {
    if (req.userRole !== "user")
      return res
        .status(400)
        .json({ msg: "athorization denied, only user is required" });

    const { cartItems } = req.body;

    //check if user exist in the cart
    const userCart = await Cart.findOne({ user: req.userID });

    let response; //request response

    if (userCart) {
      // check if product available in the cart
      const item = userCart.cartItems.find(
        (e) => e.product == cartItems.product
      );
      console.log("find : " + item);

      if (item) {
        response = await Cart.findOneAndUpdate(
          {
            user: req.userID,
            "cartItems.product": item.product,
          },
          {
            $set: {
              cartItems: {
                ...cartItems,
                quantity: item.quantity + cartItems.quantity,
              },
            },
          },
          { new: true }
        );
      } else {
        userCart.cartItems.push(cartItems);
        response = await userCart.findOneAndUpdate(
          { user: req.userID },
          { $push: { cartItems } },
          { new: true }
        );
      }
    } else {
      cart = new Cart({ user: req.userID, cartItems });
      response = await cart.save();
    }

    if (!response) return res.status(400).json({ msg: "server error" });
    res.json(response);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

module.exports = Create;
