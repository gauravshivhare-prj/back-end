# Day-13 ✅ (File Upload using Multer)
Day-13 me maine **Multer** use karke backend me file upload karna sikha.  
Is day me image/file ko server ke folder me save kar rahe hain.

## Folder Structure

Day-13/
├── uploads/
├── node_modules/
├── package.json
├── package-lock.json
└── server.js

## Day-13 Steps

### Step 1: Import Packages
const express = require("express");
const multer = require("multer");
Express server banane ke liye
Multer file upload handle karne ke liye.

### Step 2: Configure Storage (Multer)
const storage = multer.diskStorage({
  destination:(req,file,cb)=>{
    return cb(null,"./uploads");
  },
  filename:(req,file,cb)=>{
    return cb(null,file.originalname);
  }
});

* destination → file kaha store hogi
* filename → file ka naam kya hoga

### Step 3: Create Upload Middleware
const upload = multer({ storage });
Ye middleware upload ka kaam karega.

### Step 4: Create Express App
const app = express();

### Step 5: Test Route
app.get("/",(req,res)=>{
  res.send("ok");
});
Server check ke liye simple route.

### Step 6: Create POST API for File Upload
app.post("/send-file", upload.single("image"), (req,res)=>{
  console.log(req.file);
  res.send("file data");
});

* upload.single("image") → ek file upload karega
* "image" Postman ke key name se match hona chahiye

### Step 7: Start Server
app.listen(3000,()=>{
  console.log("server is running at port 3000");
});

## Postman Testing

Method:POST

URL:http://localhost:3000/send-file

Body → form-data

Key:image   (type = file)

Value:choose any image/file

## Concepts Learned

* Multer middleware
* diskStorage
* upload.single()
* req.file
* File upload handling


