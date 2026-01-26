const { default: mongoose } = require("mongoose");

const connectDB = async () => {
  try {
    let res = await mongoose.connect("mongodb://localhost:27017/save-data");
    if (res) {
      console.log("mongodb Connected");
    }
  } catch (error) {
    console.log("error while connecting db", error);
  }
};

module.exports = connectDB;

