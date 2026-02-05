// 1. add to cart

import { CartModel } from "../models/cart.model.js";
import { UserModel } from "../models/user.model.js";

// productId, userId -> params
// find cart
// add productId into cart ({items{product_id}})

export const addToCartController = async (req, res) => {
  try {
    let { productId, userId } = req.params;

    if (!productId || !userId)
      return res.status(400).json({
        message: "Id required",
      });

    let user = await UserModel.findById(userId);

    let cart = await CartModel.findByIdAndUpdate(
      user.cart,
      {
        $push: {
          items: {
            product_id: productId,
            quantity: 1,
          },
        },
      },
      { new: true }
    );

    return res.status(200).json({
      success: true,
      message: "Product added to cart",
      cart,
    });
  } catch (error) {
    console.log("error in add to cart", error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
      error,
    });
  }
};

export const incrementController = async (req, res) => {
  try {
    let { productId, cartId } = req.params;

    if (!productId || !cartId)
      return res.status(400).json({
        message: "Id required",
      });

    let cart = await CartModel.findById(cartId);

    let product = cart.items.find(
      (elem) => elem.product_id.toString() === productId
    );
    product.quantity += 1;
    await cart.save();

    return res.status(200).json({
      message: "Product quantity increased",
      success: true,
      cart,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      success: false,
      error,
    });
  }
};

export const decrementController = async (req, res) => {
  try {
    let { productId, cartId } = req.params;

    if (!productId || !cartId)
      return res.status(400).json({
        message: "Id required",
      });

    let cart = await CartModel.findById(cartId);

    let product = cart.items.find(
      (elem) => elem.product_id.toString() === productId
    );
    if (product) {
      if (product.quantity === 0)
        return res.status(400).json({
          message: "Quantity is 0",
        });
      product.quantity -= 1;
    }
    await cart.save();

    return res.status(200).json({
      message: "Product quantity decreased",
      success: true,
      cart,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      success: false,
      error,
    });
  }
};

export const deleteProductFromCartController = async (req, res) => {
  try {
    let { productId, cartId } = req.params;

    if (!productId || !cartId)
      return res.status(400).json({
        message: "Id required",
      });

    let cart = await CartModel.findById(cartId);

    let updatedCart = cart.items.filter(
      (elem) => elem.product_id.toString() !== productId
    );

    cart.items = updatedCart;

    await cart.save();

    return res.status(200).json({
      message: "Product deleted from cart",
      success: true,
      cart,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      success: false,
      error,
    });
  }
};