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


/*
=======================
Day 5 – config/db.js
=======================

Step 1:
mongoose import kiya MongoDB connect karne ke liye.

Step 2:
connectDB function banaya jo async hai.
Async isliye kyunki database connection time leta hai.

Step 3:
mongoose.connect() se MongoDB connect kiya.
mongodb://localhost:27017/save-data
- localhost: local machine
- 27017: MongoDB default port
- save-data: database ka name

Step 4:
Try-catch use kiya error handle karne ke liye.

Step 5:
connectDB function ko export kiya taaki server.js me use ho sake.

=======================
End
=======================
*/
