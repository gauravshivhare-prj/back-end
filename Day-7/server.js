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



/*
========================
Day 7 – server.js
========================

Step 1: Import express
Express server create karne ke liye.

Step 2: Import connectDB
MongoDB connection function import kiya.

Step 3: Import userRoutes
User CRUD routes ko import kiya.

Step 4: Create app instance
app server ka instance hai.

Step 5: JSON middleware
express.json() req.body se JSON data read karta hai.

Step 6: DB connect
connectDB() call karke MongoDB connect hua.

Step 7: Routes middleware
app.use("/api/users", userRoutes)

Matlab jitne routes userRoutes me hain,
unke aage prefix "/api/users" add ho jayega.

Example:
POST /register -> /api/users/register
GET / -> /api/users/
GET /:id -> /api/users/:id

Step 8: Server start
app.listen(3000) port 3000 pe server run karega.

========================
End
========================
*/