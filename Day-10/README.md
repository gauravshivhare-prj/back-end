# Day-10 ✅ (Login, Logout, JWT Middleware, Protected Routes)

Day-10 me maine authentication system ko complete kiya.

Is day me maine implement kiya:
- User Register
- User Login
- User Logout
- JWT Token generation
- Cookie based authentication
- Auth Middleware
- Protected Routes


## Folder Structure

Day-10/
├── config/
│   └── db.js
├── controllers/
│   ├── auth.controller.js
│   └── user.controllers.js
├── middlewares/
│   └── auth.middleware.js
├── models/
│   └── user.model.js
├── routes/
│   ├── auth.routes.js
│   ├── user.routes.js
│   └── home.routes.js
├── .env
├── server.js
├── package.json
└── node_modules/

## Day-10 Steps

### Step 1: Register User
User data receive hota hai  
Password bcrypt se hash hota hai  
User database me save hota hai  
JWT token generate hota hai  
Token cookie me store hota hai  

### Step 2: Login User
Email aur password receive hote hain  
Database se user find hota hai  
bcrypt.compare se password match hota hai  
JWT token generate hota hai  
Token cookie me store hota hai  

### Step 3: Logout User
Cookie se token clear kar diya jata hai  

### Step 4: JWT Token
Token create hota hai using:
jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" })
Token 1 hour ke liye valid hota hai

### Step 5: Auth Middleware
Middleware cookie se token nikalta hai
Token verify karta hai
User ko request ke andar attach karta hai
req.user = user
Agar token invalid ya missing ho to request block ho jati hai

### Step 6: Protected Route
Auth middleware lagaya gaya:
router.get("/", authMiddleware, ...)
Matlab bina login kiye route access nahi hoga

## API Endpoints
Base URL:
http://localhost:3000

### Register
POST
/api/auth/register
Body:
{
  "username": "Gaurav",
  "email": "gaurav@gmail.com",
  "password": "123456",
  "mobile": "9999999999"
}

### Login
POST
/api/auth/login
Body:
{
  "email": "gaurav@gmail.com",
  "password": "123456"
}

### Logout
POST
/api/auth/logout

### Get All Users
GET
/api/users


### Protected Home Route
GET
/api/home
(Only logged in user can access)


## Concepts Learned
* JWT Authentication
* Cookie based auth
* bcrypt hashing
* Login flow
* Logout flow
* Middleware
* Protected Routes
* Request lifecycle

## .env File
Create `.env` in root:
MONGO_URI=your_mongodb_atlas_url
JWT_SECRET=your_secret_key

