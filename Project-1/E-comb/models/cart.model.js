import mongoose, { Mongoose } from "mongoose";

const cartSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    items: [
      {
        product_id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "products",
        },
        quantity: Number,
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const CartModel = mongoose.model("cart", cartSchema);