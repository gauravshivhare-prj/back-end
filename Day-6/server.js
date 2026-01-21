import express from "express";
import { connectDB } from "./config/db.js";
import userRoutes from "./routes/user.routes.js";

const app = express();

app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  return res.send("ok");
});

app.use("/api/users", userRoutes);

app.listen(3000, () => {
  console.log("server is running on port 3000");
});


/*
========================
Day 6 – server.js
========================

Step 1: Import express
Express server banane ke liye.

Step 2: Import connectDB
Database connect karne ke liye config/db.js se function import kiya.

Step 3: Import userRoutes
Routes folder se user-related APIs import ki.

Step 4: Create Express app
app backend server instance.

Step 5: JSON middleware
app.use(express.json())
POST/PUT requests ke body data ko read karne ke liye.

Step 6: Connect DB
connectDB() call kiya MongoDB connect karne ke liye.

Step 7: Test GET /
Ye server check ke liye basic route hai.

Step 8: Use Routes as middleware
app.use("/api/users", userRoutes)

Iska matlab:
userRoutes ke andar jitne endpoints hain,
unke aage prefix "/api/users" add ho jayega.

Example:
router.post("/create") -> /api/users/create
router.get("/read")    -> /api/users/read
router.delete("/delete/:id") -> /api/users/delete/:id

Step 9: Start server
app.listen(3000) server ko start karta hai.

========================
End
========================
*/