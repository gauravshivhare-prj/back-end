require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const userRoutes = require("./routes/user.routes");
const cookieParser = require("cookie-parser");

const app = express();
app.use(express.json());

app.use(cookieParser()); //frontend ki cookies storage ko access krega

connectDB();

app.use("/api/users", userRoutes);

app.listen(3000, () => {
  console.log("server is running on port 3000");
});


// import dotenv for reading .env file(environmental variable)
