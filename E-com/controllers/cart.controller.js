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