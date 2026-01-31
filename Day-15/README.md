# Day-15 ✅ (Multiple Image Upload to ImageKit using Multer + Memory Storage)

Aaj maine **local storage ki jagah ImageKit cloud** par images upload karna sikha.
Multer ko **memoryStorage** ke sath use kiya aur images ko directly **ImageKit API** pe bheja.

## Folder Structure
Day-15/image-kit
 ┣ controllers
 ┃ ┗ product.controller.js
 ┣ routes
 ┃ ┗ products.routes.js
 ┣ services
 ┃ ┣ multer.service.js
 ┃ ┗ storage.service.js
 ┣ uploads
 ┣ .env
 ┣ server.js
 ┣ package.json

## Packages Used
npm install express multer imagekit cors dotenv

## Step 1: Multer Memory Storage

**services/multer.service.js**
* memoryStorage file ko RAM me store karta hai
* disk me save nahi hota
* buffer ke form me milta hai

let storage = multer.memoryStorage();
const upload = multer({ storage });

## Step 2: ImageKit Configuration

**services/storage.service.js**
* ImageKit instance banaya
* publicKey, privateKey, urlEndpoint env se liya
* upload() method se cloud pe image bheji

## Step 3: Controller Logic

**controllers/product.controller.js**
Flow:
1. req.files se images milti hain
2. Validation
3. Promise.all() se sab images ImageKit pe upload
4. Cloud response milta hai
Single upload ke liye:
sendImagesToIK(file.buffer, file.originalname)
Multiple upload ke liye:
Promise.all(file.map(...))

## Step 4: Route

**routes/products.routes.js**
POST /api/products/images
upload.array("images",5)
* images → frontend key
* 5 → max files

## Step 5: Server Setup
**server.js**
* CORS enable
* JSON middleware
* product routes attach

## .env File
IK_PUBLIC_KEY=your_public_key
IK_PRIVATE_KEY=your_private_key
IK_URL=your_url_endpoint
PORT=4000

## API Endpoint
POST http://localhost:4000/api/products/images
Body → form-data
Key: `images`
Type: File
Multiple: Yes

## What I Learned Today
* ImageKit cloud upload
* Multer memoryStorage
* Buffer based upload
* Promise.all for multiple uploads
* Cloud storage integration

## Run Project
npm install
npm start
Server runs on:http://localhost:4000

## Output
Images directly upload ho jayengi → **ImageKit Cloud Dashboard**
