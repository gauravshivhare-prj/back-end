# Day-4 ✅ (MongoDB + Mongoose + Model Basics)

Day-4 me maine MongoDB aur Mongoose ka **basic integration** sikha.

Is day me maine:
- Mongoose se MongoDB connect karna
- Schema aur Model banana
- Model se database me data insert karna
- Simple API ke through MongoDB use karna


## Folder Structure

Day-4/
├── models/
│   └── user.model.js
└── server.js

## Day-4 Steps

### Step 1: Import Express
Express server banane aur routes handle karne ke liye use hota hai.

### Step 2: Import Mongoose
Mongoose ek ODM (Object Data Modeling) library hai  
Jo Node.js ko MongoDB se connect karwata hai.

### Step 3: Create Express App

const app = express();

Ye server ka instance banata hai.

### Step 4: Create connectDB Function

MongoDB connection ke liye async function banaya
Kyuki DB connect hone me time lagta hai.

### Step 5: Connect MongoDB

mongoose.connect("mongodb://0.0.0.0/crazy");

* `mongodb://0.0.0.0` → local MongoDB server
* `crazy` → database name

Agar database exist nahi karta to MongoDB khud bana deta hai.

### Step 6: Use try / catch

Agar DB connect fail ho jaye to error handle karne ke liye.

### Step 7: Call connectDB()

Server start hone se pehle DB connect kar diya.

### Step 8: Create User Route

app.get("/user-data", async (req, res) => {});

Jab browser me open kare:

http://localhost:3000/user-data

Ye route chalega.

### Step 9: Insert Data using Model

UserModel.create({ name: "Rahul" });

Ye MongoDB me data insert karega.

### Step 10: Send Response

Jo data insert hua wahi response me bhej diya.

### Step 11: Start Server

app.listen(3000);

Server port 3000 pe run karega.

## Model (user.model.js)

* Schema → data ka structure
* Model → database ke upar CRUD operations ka tool

Example fields:
name: String

## Important Concepts

* Mongoose ke functions promise return karte hain
  (connect, create, find, update, delete)
* async / await use hota hai promises handle karne ke liye
* `new mongoose.Schema()` ka matlab
  naya schema object create karna
* Schema = structure
* Model = MongoDB collection ka controller.
