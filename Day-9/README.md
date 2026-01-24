# Day-9 ✅ (JWT Auth + Cookies + Admin Flag)

Day-9 me maine backend ko **authentication level** tak le gaya.

Is day me focus tha:
- JWT token
- Cookies
- bcrypt hashing continuation
- isAdmin field
- Secure user registration flow

## Folder Structure

Day-9/
├── config/
│   └── db.js
├── controllers/
│   └── user.controllers.js
├── models/
│   └── user.model.js
├── routes/
│   └── user.routes.js
├── .env
├── server.js
├── package.json
└── node_modules/

## Day-9 Steps

### Step 1: MongoDB Atlas + .env
MongoDB Atlas ka connection `.env` file me store kiya.

MONGO_URI=your_mongodb_atlas_url
JWT_SECRET=your_secret_key

.env ka use sensitive data ko code se bahar rakhne ke liye hota hai.

### Step 2: bcrypt se password hashing
User register ke time password ko hash kiya.
bcrypt.hash(password, 10)

Isse password database me hide ho jata hai
Plain password kabhi store nahi hota.

### Step 3: JWT Token generate kiya
User create hone ke baad JWT token generate kiya.
jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" })

Token ka kaam:
* User ko identify karna
* Authenticated requests allow karna
Token 1 hour ke liye valid hai.

### Step 4: Token cookie me store kiya
Generated token ko cookie me save kiya.
res.cookie("token", token)

Cookie ka fayda:
* Frontend automatically token store karta hai
* Har request ke saath token bheja ja sakta hai

### Step 5: cookie-parser use kiya
Server ko cookies read karne ke liye middleware use kiya.
app.use(cookieParser())
Isse frontend se aayi cookies accessible hoti hain.

### Step 6: isAdmin field add ki
User schema me ek extra field add ki:
isAdmin: {
  type: String,
  default: false
}
Is field ka use future me:
* Admin routes
* Role based access
* Authorization

## APIs (Day-9)

Base URL: http://localhost:3000/api/users

### Register User
POST `/register`
{
  "username": "Gaurav",
  "email": "gaurav@gmail.com",
  "password": "123456",
  "mobile": "9999999999"
}

Register pe:
* Password hash hota hai
* JWT token banta hai
* Token cookie me save hota hai

### Get All Users
GET `/`

### Get Single User
GET `/:id`

### Update User
PUT `/update/:id`

### Delete User
DELETE `/delete/:id`

## Concepts Learned (Day-9)
* JWT authentication ka basic flow
* Token generate karna aur expire set karna
* Cookies me token store karna
* cookie-parser middleware
* bcrypt hashing continuation
* Admin flag for role based access
* Secure backend structure

## How to Run
1. Install dependencies
   npm install

2. Create .env file
MONGO_URI=your_mongodb_atlas_url
JWT_SECRET=your_secret_key

3. Start server
node server.js


