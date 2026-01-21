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


/*
========================
Day 6 – controllers/user.controllers.js
========================

Controller ka kaam:
Request (req) ko handle karna aur response (res) bhejna.
Yaha pe actual business logic likha hota hai.

---------------------------------------
1) createController
---------------------------------------
Step 1: req.body se data lena
username, email, password, mobile

Step 2: Validation
Agar koi bhi field missing hai to direct response:
"All fields are required"

Step 3: User create
UserModel.create() se DB me new user store hota hai.

Step 4: Response
Jo user create hua wo return ho raha hai.

---------------------------------------
2) getAllUserController
---------------------------------------
Step 1: UserModel.find()
DB se saare users fetch karta hai.

Step 2: Response
Users list client ko send kar deta hai.

---------------------------------------
3) deleteUserController
---------------------------------------
Step 1: req.params.id se id lena
Delete request me URL ke andar id aati hai.

Example:
DELETE /delete/65b1d0...

Step 2: findByIdAndDelete()
MongoDB se user delete karta hai.

Step 3: Response
"user deleted"

========================
End
========================
*/