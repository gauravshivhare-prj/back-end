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
    isAdmin: {
      type: String,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);
const UserModel = mongoose.model("users", userSchema);
module.exports = UserModel;


// added is admin 