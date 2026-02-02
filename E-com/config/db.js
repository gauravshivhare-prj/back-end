import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    let res = await mongoose.connect("mongodb://0.0.0.0/d-mart");
    if (res) {
      console.log("Mongodb Connected");
    }
  } catch (error) {
    console.log("error while connecting DB");
  }
};