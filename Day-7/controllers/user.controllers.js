const UserModel = require("../models/user.model");

const registerController = async (req, res) => {
  try {
    let { username, email, password, mobile } = req.body;

    if (!username || !email || !password || !mobile)
      return res.status(400).json({
        message: "All fields are required",
      });

    let newUser = await UserModel.create({
      username,
      email,
      password,
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


/*
========================
Day 7 – controllers/user.controllers.js
========================

Controllers ka kaam:
Request handle karna + logic likhna + response send karna.

---------------------------------------
1) registerController (POST)
---------------------------------------
Step 1: req.body se fields nikalna
username, email, password, mobile

Step 2: Validation
Agar koi bhi field missing -> 400 status + message

Step 3: Create user
UserModel.create() se DB me new user insert hota hai.

Step 4: Response
201 status = resource created
Return success + message + user

---------------------------------------
2) getAllUserController (GET)
---------------------------------------
Step 1: UserModel.find()
DB se saare users fetch karta hai.

Step 2: Response
200 status + users array return

---------------------------------------
3) getSingleUserController (GET by id)
---------------------------------------
Step 1: req.params.id se id lena
URL me id pass hoti hai

Step 2: UserModel.findById(id)
Specific user fetch karta hai

Step 3: Response
200 status + user data

---------------------------------------
4) updateUserController (PUT)
---------------------------------------
Step 1: id get from params
Step 2: find existing user
Step 3: req.body validation
Step 4: findByIdAndUpdate()
new: true -> updated data return karega

Step 5: response send
User Updated

---------------------------------------
5) deleteUserController (DELETE)
---------------------------------------
Step 1: req.params.id
Step 2: findByIdAndDelete()
User delete karta hai
Step 3: Response success msg

---------------------------------------
Status Code Meaning:
400 -> Bad Request (client ki galti, validation fail)
404 -> Not Found
201 -> Created
200 -> OK
500 -> Internal Server Error (server side problem)

========================
End
========================
*/
