const express = require("express");

const {
  addToCart,
  deleteCartItem,
  fetchCartItems,
  updateCartItemQuantity,
} = require("../../controllers/shop/cart-controller");

const router = express.Router();

router.post("/add", addToCart);
router.get("/get/:userId", fetchCartItems);
router.put("/update-cart", updateCartItemQuantity);
router.delete("/:userId/:productId", updateCartItemQuantity);

module.exports = router;
