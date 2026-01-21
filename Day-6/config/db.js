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




/*
========================
Day 6 – config/db.js
========================

Step 1: Import mongoose
mongoose ek ODM hai (Object Data Modeling).
MongoDB se connect karne aur schema/model banane me use hota hai.

Step 2: connectDB function
connectDB ek async function hai kyunki DB connection time leta hai.

Step 3: mongoose.connect()
mongodb://0.0.0.0/ronaldo
- 0.0.0.0 -> local machine ko represent karta hai
- ronaldo -> database name

Step 4: Success message
Agar res milta hai iska matlab connection successful.

Step 5: Error handling
try-catch se DB connection ka error handle hota hai.

========================
End
========================
*/