# Day-6 ✅ (MVC Structure + Routes + Controllers + Models)

Day-6 me maine backend ko thoda **professional structure** me organize kiya.

Is day me maine:
- MVC pattern follow kiya
- Routes, Controllers, Models alag-alag banaye
- MongoDB se CRUD operations kiye

## Folder Structure

Day-6/
├── config/
│   └── db.js
├── controllers/
│   └── user.controllers.js
├── models/
│   └── user.model.js
├── routes/
│   └── user.routes.js
└── server.js

## Day-6 Steps

### Step 1: Import Express
Express server banane ke liye use hota hai.

### Step 2: Import connectDB
MongoDB connect karne ke liye config/db.js se function import kiya.

### Step 3: Create Express App
const app = express();

### Step 4: JSON Middleware
app.use(express.json());
POST aur PUT requests me body read karne ke liye.

### Step 5: Connect MongoDB
connectDB();
MongoDB URL:mongodb://0.0.0.0/ronaldo

### Step 6: Create Test Route
app.get("/", (req, res) => {
  res.send("ok");
});

Server working check ke liye.

### Step 7: Use User Routes
app.use("/api/users", userRoutes);
Matlab userRoutes ke sab endpoints ke aage `/api/users` lag jayega.

### Step 8: Create Routes
Routes file me:

* POST `/create`
* GET `/read`
* DELETE `/delete/:id`

Final APIs:

POST    /api/users/create
GET     /api/users/read
DELETE  /api/users/delete/:id

### Step 9: Create Controller

Controller me logic likha:
* User create
* All users fetch
* User delete

Controller ka kaam:
Request lena → Process karna → Response bhejna

### Step 10: Create Model

user.model.js me schema banaya:

Fields:

* username
* email
* mobile
* password

timestamps true use kiya.

## Concepts Learned

* MVC Pattern
* Router
* Controller
* Model
* MongoDB + Mongoose
* CRUD operations
