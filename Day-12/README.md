# Day-12 ✅ (MERN Auth Integration - React + Node + JWT + Cookies)

Day-12 me maine **React frontend ko Node.js backend ke saath integrate kiya**.

Is day me maine:
- React form se user register karwaya
- Backend me JWT authentication lagaya
- Token cookies me store kiya
- Auth middleware banaya
- Protected route banaya

## Folder Structure

Day-12/
├── b-1   (Backend)
│   ├── config
│   │   └── db.js
│   ├── controllers
│   │   ├── auth.controller.js
│   │   └── user.controllers.js
│   ├── middlewares
│   │   └── auth.middleware.js
│   ├── models
│   │   └── user.model.js
│   ├── routes
│   │   ├── auth.routes.js
│   │   ├── home.routes.js
│   │   └── user.routes.js
│   ├── server.js
│   └── .env
│
└── r-1   (React Frontend)
└── src
└── App.jsx

## Backend Features

### 1. MongoDB Connection
Database connect using mongoose and env variable.
process.env.MONGO_URI

### 2. User Registration
Flow:
Frontend → Backend → Hash Password → Save User → Generate Token → Store in Cookie
POST /api/auth/register

### 3. User Login
- Email & password check  
- bcrypt.compare  
- JWT token generate  
- Token cookie me save  
POST /api/auth/login

### 4. Logout
Cookie clear kar diya.
POST /api/auth/logout

### 5. JWT Middleware
- Cookie se token nikalta hai  
- jwt.verify karta hai  
- req.user me user attach karta hai  
Agar token valid hoga tabhi route chalega.

### 6. Protected Home Route
GET /api/home
Sirf logged-in user access kar sakta hai.

### 7. CORS Setup
React aur Backend different ports pe hain isliye CORS use kiya.
origin: [http://localhost:5173](http://localhost:5173)
credentials: true

## Frontend (React)

### React Form
- react-hook-form use kiya
- axios se API call
POST [http://localhost:3000/api/auth/register](http://localhost:3000/api/auth/register)

### Home Button
Protected route hit karta hai:
GET [http://localhost:3000/api/home](http://localhost:3000/api/home)
Agar token cookie me hoga tabhi success milega.

## Important Concepts Learned
- JWT Authentication  
- Cookies handling  
- bcrypt hashing  
- Auth Middleware  
- MERN integration  
- Protected Routes  
- CORS  

## How to Run Project

### Backend
cd b-1
npm install
node server.js

### Frontend
cd r-1
npm install
npm run dev

## Environment Variables (.env)
MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret_key
