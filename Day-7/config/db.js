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


/*
========================
Day 7 – config/db.js
========================

Step 1: Import mongoose
mongoose ko import kiya MongoDB se connect karne ke liye.

Step 2: connectDB function
connectDB ek async function hai because database connection time leta hai.

Step 3: mongoose.connect()
mongodb://0.0.0.0/crud2
- 0.0.0.0 -> local address
- crud2 -> database name

Step 4: Success console
Agar res milta hai to mongodb connected ka msg print hota hai.

Step 5: Error handling
try-catch se DB connection ka error handle ho jata hai.

Step 6: Export
module.exports se connectDB export kiya jisse server.js me use kar sake.

========================
End
========================
*/