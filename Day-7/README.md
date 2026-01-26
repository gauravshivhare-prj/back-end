# Day-7 ✅ (Full CRUD APIs + Status Codes + MVC Structure)

Day-7 me maine complete **User CRUD APIs** banayi using MVC pattern.

Is day me maine:
- MongoDB connect kiya
- User Model banaya
- Controllers me CRUD logic likha
- Routes banaye
- Proper HTTP status codes use kiye

## Folder Structure

Day-7/
├── config/
│   └── db.js
├── controllers/
│   └── user.controllers.js
├── models/
│   └── user.model.js
├── routes/
│   └── user.routes.js
└── server.js

## Day-7 Steps

### Step 1: Connect MongoDB
config/db.js me mongoose.connect() use karke DB connect kiya.

Database:mongodb://0.0.0.0/crud2

### Step 2: Create User Schema & Model
User ke fields:
- username
- email (unique)
- mobile
- password  
timestamps enabled.

### Step 3: Create Controllers

Controllers banaye:
- registerController (create user)
- getAllUserController
- getSingleUserController
- updateUserController
- deleteUserController

Controllers ka kaam:
Request lena → Logic run karna → Response dena.

### Step 4: Create Routes

Routes file me endpoints:

POST    /api/users/register
GET     /api/users/
GET     /api/users/:id
PUT     /api/users/update/:id
DELETE  /api/users/delete/:id

### Step 5: Use Routes in server.js

app.use("/api/users", userRoutes);

### Step 6: JSON Middleware

app.use(express.json());

req.body se JSON data read karne ke liye

### Step 7: Start Server

app.listen(3000);

## HTTP Status Codes Used

- 200 → OK  
- 201 → Created  
- 400 → Bad Request  
- 404 → Not Found  
- 500 → Internal Server Error  

## Concepts Learned

- MVC Architecture
- MongoDB + Mongoose
- CRUD Operations
- Express Router
- Status Codes
- Async / Await
