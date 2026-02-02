import dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";
import { UserModel } from "../models/user.model.js";

export const authMiddleware = async (req, res, next) => {
  try {
    let token = req.cookies.token;

    if (!token)
      return res.status(401).json({
        message: "Unauthorized user!",
      });

    let decode = jwt.verify(token, process.env.JWT_SECRET);

    if (!decode)
      return res.status(400).json({
        message: "Unauthorized!",
      });

    let user = await UserModel.findById(decode.id);
    req.user = user;
    next();
  } catch (error) {
    console.log("error in md", error);
  }
};