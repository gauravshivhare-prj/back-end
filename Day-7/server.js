const express = require("express");
const connectDB = require("./config/db");
const userRoutes = require("./routes/user.routes");

const app = express();
app.use(express.json());

connectDB();

app.use("/api/users", userRoutes);

app.listen(3000, () => {
  console.log("server is running on port 3000");
});


