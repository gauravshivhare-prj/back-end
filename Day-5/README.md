# Day-5 ✅ (MongoDB Connection + POST API + Save Data)

Day-5 me maine backend ko database ke saath connect karke  
MongoDB me data store karna sikha.

Is day me maine:
- MongoDB local connect kiya
- Mongoose use kiya
- Product model use karke data save kiya
- POST API banayi

## Folder Structure

Day-5/
├── config/
│   └── db.js
├── models/
│   └── product.model.js
└── server.js

## Day-5 Steps

### Step 1: Import Express
Express server banane ke liye import kiya.

### Step 2: Import DB Connection Function
config/db.js se connectDB import kiya.

### Step 3: Import Product Model
ProductModel ko models folder se import kiya.

### Step 4: Create Express App
const app = express();

### Step 5: JSON Middleware
app.use(express.json());
req.body se JSON data read karne ke liye use hota hai.

### Step 6: Connect MongoDB

connectDB();

MongoDB URL:mongodb://localhost:27017/save-data

* localhost → local machine
* 27017 → MongoDB default port
* save-data → database name

### Step 7: Test GET API

app.get("/", (req, res) => {
  res.send("okk milgya res");
});

Browser me open:http://localhost:3000/

### Step 8: Create POST API (/new-product)

app.post("/new-product", async (req, res) => {
  let { productName, price, description } = req.body;

  let newProduct = await ProductModel.create({
    productName,
    price,
    description,
  });

  res.send(newProduct);
});

### Step 9: Test using Postman

Method:POST

URL:http://localhost:3000/new-product

Body → raw → JSON

{
  "productName": "Laptop",
  "price": 50000,
  "description": "Gaming laptop"
}

### Step 10: Start Server

app.listen(3000);

## Important Concepts (Day-5)

### req, res

req aur res HTTP protocol se related hote hain.
HTTP me request-response cycle hota hai.
FTP jaise protocols me req/res ka same concept nahi hota.

### Mongoose Inflection Rule

Mongoose automatically collection ka naam plural bana deta hai.

Example:

* Model: Product → Collection: products
* Model: Person → Collection: people

### Async / Await

MongoDB ke mostly functions async hote hain
isliye await use hota hai.

