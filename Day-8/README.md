# Day-8 ✅ (MongoDB Atlas + dotenv + bcrypt)

    Aaj ke Day-8 me maine apne CRUD project ko thoda aur **real-world** banaya by adding:

- ✅ MongoDB Atlas (Cloud Database)
- ✅ `.env` file using **dotenv**
- ✅ Password hashing using **bcrypt**

## 📌 Folder Structure

Day-8/
│
├── config/
│ └── db.js
├── controllers/
│ └── user.controllers.js
├── models/
│ └── user.model.js
├── routes/
│ └── user.routes.js
├── .env
├── server.js
├── package.json
└── node_modules/

## ✅ Day-8 Steps (What I did)

### Step 1: MongoDB Atlas Setup (Cloud Database)

- MongoDB Atlas pe sign in kiya
- Free cluster create kiya
- Database URI copy kiya (cluster ka connection string)

### Step 2: `.env` file banayi

Project ke root me `.env` file create ki aur usme URI store ki:
Example:MONGO_URI=your_mongodb_atlas_connection_string
⚠️ `.env` ka kaam sensitive data ko hide karna hota hai (URI, passwords, keys, etc.)

### Step 3: dotenv use kiya

`server.js` me dotenv import kiya taaki `.env` ka data load ho jaye : require("dotenv").config();
Ab `.env` ke variables milte hain : process.env.MONGO_URI

### Step 4: MongoDB connect using environment variable

`config/db.js` me : mongoose.connect(process.env.MONGO_URI)
Matlab ab DB URI hardcode nahi hai. ✅

### Step 5: bcrypt install + use kiya (Password hashing)

            bcrypt password ko hide (hash) kar deta hai.

Register controller me : let hassPass = await bcrypt.hash(password, 10);
Aur DB me password aise store hota hai : password: hassPass
✅ Ab plain password database me save nahi hoga.

## 🔥 API Endpoints (Day-8)

Base URL : http://localhost:3000/api/users

### ✅ Register User

**POST** `/register`
Body (JSON):{
"username": "xyz",
"email": "xyz@gmail.com",
"password": "123456",
"mobile": "9999999999"
}

### ✅ Get All Users

**GET** `/`

### ✅ Get Single User

**GET** `/:id`
Example : GET /api/users/65xxxxxxx

### ✅ Update User

**PUT** `/update/:id`
Body (JSON):{
"username": "New Name",
"email": "new@gmail.com",
"password": "newpass123",
"mobile": "8888888888"
}

### ✅ Delete User

**DELETE** `/delete/:id`

## 💡 Concepts Learned (Day-8)

### 1) MongoDB Atlas

Cloud database jaha MongoDB remote server pe hota hai (local nahi).

### 2) dotenv + .env

Sensitive information (like DB URI) ko code se alag rakhna.

### 3) bcrypt hashing

Password ko hide (hash) karke store karna for security.

## ▶️ How to Run (Local)

1. Install dependencies : npm install
2. Create `.env` file : MONGO_URI=your_mongodb_atlas_connection_string
3. Start server:node server.js
