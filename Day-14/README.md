# Day-14 ✅ (Multiple Image Upload using Multer + React)

Aaj maine **React frontend se multiple images upload** karke
**Node + Express + Multer backend** me receive karna sikha.

Project me 2 folders hain:
* `multer-integrate` → React Frontend
* `image-kit` → Backend (Express + Multer)

## Folder Structure
Day-14
 ┣ image-kit (Backend)
 ┃ ┣ controllers
 ┃ ┣ routes
 ┃ ┣ services
 ┃ ┣ uploads
 ┃ ┣ server.js
 ┃ ┗ .env
 ┣ multer-integrate (React)
 ┃ ┣ src
 ┃ ┣ public
 ┃ ┗ App.jsx

## Backend Flow (image-kit)

### Step 1: Install Packages
npm install express multer cors dotenv

### Step 2: Multer Service (services/multer.service.js)
* multer diskStorage use kiya
* destination → uploads folder
* filename → random number + original name
Multer ka kaam → file ko server ke folder me save karna.

### Step 3: Controller (product.controller.js)
* req.files se files milti hain
* Agar file na ho → error
* Console me file data print hota hai
Controller ka kaam:
Request lena → logic lagana → response dena

### Step 4: Routes (products.routes.js)
POST /api/products/images
upload.array("images",5)
* "images" → form-data key
* 5 → max 5 files

### Step 5: Static Folder
app.use("/uploads", express.static("uploads"))
Isse browser me uploads folder accessible ho jata hai.

### Step 6: Server Start
npm start
Server runs on:http://localhost:4000

## Frontend Flow (multer-integrate)

### Step 1: Install Packages
npm install axios react-hook-form

### Step 2: File Input
<input multiple type="file" />
multiple attribute se ek se zyada images select hoti hain.

### Step 3: FormData
FormData ke andar images append ki:
formData.append("images", file)

### Step 4: Axios Request
axios.post("http://localhost:3000/api/products/images", formData)
Images backend ko send hoti hain.

### Step 5: Display Image
Backend se jo file path aata hai
usko `<img src="">` me show kiya.

## What I Learned Today
* Multer kya hota hai
* Single vs Multiple file upload
* upload.single() vs upload.array()
* FormData kya hota hai
* React se file backend bhejna
* express.static() ka use

## Important Notes

* Always use same key name
  Frontend → "images"
  Backend → upload.array("images")

* uploads folder gitignore me hona chahiye

## Run Project

### Backend
cd image-kit
npm install
npm start
```

### Frontend
cd multer-integrate
npm install
npm run dev

## Output
User multiple images select karega →
Images server ke **uploads/** folder me save ho jayengi.
