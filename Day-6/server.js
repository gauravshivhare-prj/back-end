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

