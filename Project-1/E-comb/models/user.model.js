import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      minlength: 6,
      required: true,
    },
    mobile: {
      type: String,
      minlength: 10,
      maxlength: 10,
      required: true,
    },
    products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "products",
      },
    ],
    cart: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "cart",
    },
  },
  {
    timestamps: true,
  }
);

export const UserModel = mongoose.model("users", userSchema);