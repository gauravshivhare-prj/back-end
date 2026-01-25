const jwt = require("jsonwebtoken");
const UserModel = require("../models/user.model");

const authMiddleware = async (req, res, next) => {
  try {
    let token = req.cookies.token;

    if (!token)
      return res.status(404).json({
        message: "Token not found! unauthorized",
      });

    let decode = jwt.verify(token, process.env.JWT_SECRET);

    if (!decode)
      return res.status(401).json({
        message: "invalid token",
      });

    let user = await UserModel.findById(decode.id);
    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error",
      error,
    });
  }
};

module.exports = authMiddleware;