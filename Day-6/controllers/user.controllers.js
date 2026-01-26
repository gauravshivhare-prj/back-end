import { UserModel } from "../models/user.model.js";

export const createController = async (req, res) => {
  try {
    let { username, email, password, mobile } = req.body;

    if (!username || !email || !password || !mobile) {
      return res.send("All fields are required");
    }

    let newUser = await UserModel.create({
      username,
      email,
      password,
      mobile,
    });

    if (!newUser) return res.send("something went wrong");

    return res.send(newUser);
  } catch (error) {
    console.log("error in create api", error);
    return res.send(error);
  }
};

export const getAllUserController = async (req, res) => {
  try {
    let allUsers = await UserModel.find();

    if (!allUsers) return res.send("kuch hogya hai dikkat hogyi ");

    return res.send(allUsers);
  } catch (error) {
    console.log("error in getting users", error);
    return res.send(error);
  }
};

export const deleteUserController = async (req, res) => {
  try {
    let id = req.params.id;

    if (!id) return res.send("Id not found");

    let deluser = await UserModel.findByIdAndDelete(id);

    return res.send("user deleted");
  } catch (error) {
    console.log("error in delete users", error);
    return res.send(error);
  }
};

