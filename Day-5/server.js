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


/*
=======================
Day 5 – Backend Steps
=======================

Step 1: Express import
Express ko import kiya server create karne ke liye.

Step 2: DB connection function import
connectDB ko config/db file se import kiya.
Ye database connection ka kaam karega.

Step 3: Product model import
ProductModel ko models/product.model se import kiya.
Ye MongoDB collection me product save karne ke kaam aayega.

Step 4: Create Express app
app server ka instance hai.

Step 5: JSON middleware
app.use(express.json())
Is middleware se req.body ka JSON data read hota hai.
POST request me body ka data isi se milega.

Step 6: Connect MongoDB
connectDB() call karke database connection start kiya.

Step 7: Test GET API (/)
Jab browser me localhost:3000/ open karenge
to response milega "okk milgya res"

Step 8: Create POST API (/new-product)
Ye API Postman/Frontend se data receive karegi.
req.body se productName, price, description liya.

Step 9: Save data in MongoDB using Mongoose
ProductModel.create() se data database me store ho raha hai.
create() async hai isliye await use hua.

Step 10: Send response
res.send(newProduct) se jo product save hua wo response me bhej diya.

Step 11: Start server
app.listen(3000) server start karega port 3000 pe.

-----------------------------------
Extra Important Points (as you said)
-----------------------------------

Point 1:
req, res HTTP protocol se related hote hain.
Jab FTP jaise protocol pe kaam karenge to waha req/res ka concept same nahi hota.
HTTP me hi request-response flow use hota hai.

Point 2:
Mongoose me Inflection rule hota hai.
Model ka name singular rakhte hain but MongoDB me collection usually plural ban jati hai.
Example:
Model: Person  -> Collection: people
Model: Product -> Collection: products

=======================
End of Day 5
=======================
*/
