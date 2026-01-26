const { default: mongoose } = require("mongoose");

const connectDB = async () => {
  try {
    let res = await mongoose.connect(process.env.MONGO_URI);
    if (res) {
      console.log("mongodb Connected");
    }
  } catch (error) {
    console.log("error while connectin db", error);
  }
};

module.exports = connectDB;