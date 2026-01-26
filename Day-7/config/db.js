const { default: mongoose } = require("mongoose");

const connectDB = async () => {
  try {
    let res = await mongoose.connect("mongodb://0.0.0.0/crud2");
    if (res) {
      console.log("mongodb Connected");
    }
  } catch (error) {
    console.log("error while connectin db", error);
  }
};

module.exports = connectDB;

