const UserModel = require("../models/user.model");

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
  getAllUserController,
  getSingleUserController,
  updateUserController,
  deleteUserController,
};