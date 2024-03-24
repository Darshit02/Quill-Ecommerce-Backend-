const CartItem = require("../models/cartItem.model");
const userService = require("../services/user.service.js");

const updateCartItem = async (userId, cartItemId, cartItemData) => {
  try {
    const item = await findCartItemById(cartItemId);
    if (!item) {
      throw new Error("Cart Item not found with id", cartItemId);
    }
    const user = await userService.findUserById(userId);
    if (!user) {
      throw new Error("User not found with id", userId);
    }
    if (user._id.toString() === userId.toString()) {
      item.quantity = cartItemData.quantity;
      item.price = item.quantity * item.product.price;
      item.discountedPrice = item.quantity * item.product.discountedPrice;
      const updatedCartItem = await item.save();
      return updatedCartItem;
    } else {
      throw new Error("User not authorized to update cart item");
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

const removeCartItem = async (userId, cartItemId) => {
  const cartItem = await findCartItemById(cartItemId);
  const user = await userService.findUserById(userId);
  if (user._id.toString() === cartItem.userId.toString()) {
    return await CartItem.findByIdAndDelete(cartItemId);
  } else {
    throw new Error("User not authorized to delete cart item");
  }
};


const findCartItemById = async (cartItemId) => {
  const cartItem = await CartItem.findById(cartItemId).populate("product");
  if (cartItem) {
    return cartItem;
  } else {
    throw new Error("Cart Item not found with id", cartItemId);
  }
};

module.exports = {
  updateCartItem,
  removeCartItem,
  findCartItemById,
}