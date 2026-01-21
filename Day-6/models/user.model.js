import mongoose from "mongoose";

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

export const UserModel = mongoose.model("users", userSchema);



/*
========================
Day 6 – models/user.model.js
========================

Step 1: Import mongoose
Schema aur model banane ke liye mongoose import kiya.

Step 2: Create Schema
userSchema ek blueprint hai database document ka.
Matlab user table/collection me kaunse fields honge.

Step 3: Schema Fields
- username: String, required
- email: String, required + unique (duplicate email allowed nahi)
- mobile: String, length 10
- password: String, required, minimum 6 length

Step 4: timestamps: true
MongoDB me auto create ho jaate hain:
- createdAt
- updatedAt

Step 5: Create Model
mongoose.model("users", userSchema)
Model actual DB operations karta hai:
create, find, delete, update

========================
End
========================
*/