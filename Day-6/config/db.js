import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    let res = await mongoose.connect("mongodb://0.0.0.0/ronaldo");
    if (res) {
      console.log("mongodb Connected");
    }
  } catch (error) {
    console.log("error while connecting db", error);
  }
};



