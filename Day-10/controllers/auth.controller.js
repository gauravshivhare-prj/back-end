const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/user.model");

const registerController = async (req, res) => {
  try {
    // 1. recieve data
    let { username, email, password, mobile } = req.body;

    if (!username || !email || !password || !mobile)
      return res.status(400).json({
        message: "All fields are required",
      });

    // 2. hash pass
    let hassPass = await bcrypt.hash(password, 10);

    // 3. create user
    let newUser = await UserModel.create({
      username,
      email,
      password: hassPass,
      mobile,
    });

    if (!newUser)
      return res.status(400).json({
        message: "Something went wrong",
      });

    // 4. token generation
    let token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    // 5. save token in cookie
    res.cookie("token", token);

    // 6. send response
    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: newUser,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error,
    });
  }
};

const loginController = async (req, res) => {
  try {
    let { email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({
        message: "All fields are required",
      });

    let existedUser = await UserModel.findOne({ email });
    if (!existedUser)
      return res.status(404).json({
        message: "User not found! Please register first",
      });

    let checkPass = await bcrypt.compare(password, existedUser.password);

    if (!checkPass) {
      return res.status(401).json({
        message: "Incorrect email or password! Unauthorized",
      });
    }

    let token = jwt.sign({ id: existedUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.cookie("token", token);

    return res.status(200).json({
      success: true,
      message: "User logged in",
      user: existedUser,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error,
    });
  }
};

const logoutController = async (req, res) => {
  try {
    res.clearCookie("token");

    return res.status(200).json({
      success: true,
      message: "user logged out",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error,
    });
  }
};

module.exports = {
  registerController,
  loginController,
  logoutController,
};
