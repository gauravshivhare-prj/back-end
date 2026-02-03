import { CartModel } from "../models/cart.model.js";
import { UserModel } from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const registerController = async (req, res) => {
  try {
    let { name, email, password, mobile } = req.body;

    if (!name || !email || !password || !mobile)
      return res.status(400).json({
        message: "All fields are required",
      });

    let isExisted = await UserModel.findOne({ email });

    if (isExisted) {
      return res.status(400).json({
        message: "User already exist.",
      });
    }

    let hashPass = await bcrypt.hash(password, 10);

    let newUser = await UserModel.create({
      name,
      email,
      mobile,
      password: hashPass,
    });

    let userCart = await CartModel.create({
      user_id: newUser._id,
    });

    newUser.cart = userCart._id;
    await newUser.save();

    let token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.cookie("token", token);

    return res.status(201).json({
      success: true,
      message: "User registered",
      user: newUser,
    });
  } catch (error) {
    console.log("error in reg", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const loginController = async (req, res) => {
  try {
    let { email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({
        message: "All fields are required",
      });

    let existedUser = await UserModel.findOne({ email });
    if (!existedUser)
      return res.status(404).json({
        message: "User not found",
      });

    let checkPass = await bcrypt.compare(password, existedUser.password);

    if (!checkPass)
      return res.status(401).json({
        message: "Incorrect Email or password",
      });
    let token = jwt.sign({ id: existedUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.cookie("token", token);

    return res.status(200).json({
      success: true,
      message: "User Logged in",
      user: existedUser,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const logoutController = async (req, res) => {
  try {
    let { user_id } = req.body;
    if (!user_id)
      return res.status(404).json({
        message: "id not found",
      });

    res.clearCookie("token");

    return res.status(200).json({
      message: "User log out",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};