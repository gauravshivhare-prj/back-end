import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    price: {
      amount: {
        type: Number,
        required: true,
      },
      currency: {
        type: String,
        enum: ["INR", "$"],
        default: "INR",
      },
    },
    images: [
      {
        type: String,
        maxlength: 5,
      },
    ],
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
  },
  {
    timestamps: true,
  }
);

export const ProductModel = mongoose.model("products", productSchema);