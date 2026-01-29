require("dotenv").config();
const express = require("express");
const cors = require("cors");
const productRoutes = require("./routes/products.routes");

const app = express();

app.use(express.json());

app.use("/uploads", express.static("uploads")); //-> accessing local folder

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

let port = process.env.PORT || 4000;

app.use("/api/products", productRoutes);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});