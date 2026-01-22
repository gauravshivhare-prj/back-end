const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    mobile: {
      type: String,
      minlength: 10,
      maxlength: 10,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
  },
  {
    timestamps: true,
  }
);
const UserModel = mongoose.model("users", userSchema);
module.exports = UserModel;


/*
========================
Day 7 – models/user.model.js
========================

Step 1: Import mongoose
mongoose schema/model banane ke liye use hota hai.

Step 2: Create Schema
userSchema ek structure/blueprint hai user document ka.

Step 3: Define Fields
username: required string
email: required + unique (same email repeat nahi ho sakta)
mobile: string with length 10
password: required + minlength 6

Step 4: timestamps
timestamps: true se auto fields create ho jaate:
createdAt, updatedAt

Step 5: Create Model
mongoose.model("users", userSchema)
Is model ki help se DB operations hoti hain:
create, find, update, delete

Step 6: Export Model
module.exports se export kiya taaki controller me import ho sake.

========================
End
========================
*/