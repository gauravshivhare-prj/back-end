const UserModel = require("../models/user.model");
const bcrypt = require("bcrypt");

const registerController = async (req, res) => {
  try {
    let { username, email, password, mobile } = req.body;

    if (!username || !email || !password || !mobile)
      return res.status(400).json({
        message: "All fields are required",
      });

    let hassPass = await bcrypt.hash(password, 10);
    // hashing a password using bcrypt

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

const getAllUserController = async (req, res) => {
  try {
    let allUsers = await UserModel.find();

    return res.status(200).json({
      success: true,
      message: "All user fetched",
      users: allUsers,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error,
    });
  }
};

const getSingleUserController = async (req, res) => {
  try {
    let id = req.params.id;

    if (!id)
      return res.status(404).json({
        message: "Id not found",
      });

    let user = await UserModel.findById(id);

    return res.status(200).json({
      success: true,
      message: "User fetched",
      user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error,
    });
  }
};

const updateUserController = async (req, res) => {
  try {
    let id = req.params.id;

    if (!id)
      return res.status(404).json({
        message: "Id not found",
      });

    let existingUser = await UserModel.findById(id);

    if (!existingUser)
      return res.status(404).json({
        message: "User not found",
      });

    let { username, email, password, mobile } = req.body;

    if (!username || !email || !password || !mobile)
      return res.status(400).json({
        message: "All fields are required",
      });

    let updatedUser = await UserModel.findByIdAndUpdate(
      { _id: id },
      {
        username,
        email,
        password,
        mobile,
      },
      {
        new: true,
      }
    );

    return res.status(200).json({
      success: true,
      message: "User Updated",
      user: updatedUser,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error,
    });
  }
};

const deleteUserController = async (req, res) => {
  try {
    let id = req.params.id;

    if (!id)
      return res.status(404).json({
        message: "Id not found",
      });

    let delUser = await UserModel.findByIdAndDelete(id);

    return res.status(200).json({
      success: true,
      message: "User deleted",
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
  getAllUserController,
  getSingleUserController,
  updateUserController,
  deleteUserController,
};



// bcrypt is using for hashing the password mean hiding the password