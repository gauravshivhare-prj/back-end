import dotenv from "dotenv";
import cookieParser from "cookie-parser";
dotenv.config();
import express from "express";
import authRoutes from "./routes/auth.routes.js";
import productRoutes from "./routes/product.routes.js";
import cartRoutes from "./routes/cart.routes.js";

import { connectDB } from "./config/db.js";

const app = express();

app.use(express.json());

app.use(cookieParser());

connectDB();

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});