const express = require("express");
const connectDB = require("./config/db");
const ProductModel = require("./models/product.model");

const app = express();

app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.send("okk milgya res");
});

app.post("/new-product", async (req, res) => {
  let { productName, price, description } = req.body;

  let newProduct = await ProductModel.create({
    productName: productName,
    price: price,
    description: description,
  });

  res.send(newProduct);
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});

