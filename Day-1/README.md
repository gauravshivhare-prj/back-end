# Day-1 ✅ (Express Server Basics)

Day-1 me maine backend ki foundation start ki.

Is day me maine sikha:
- Node.js kya hota hai
- Express kya hota hai
- Simple server kaise start karte hain
- Server ko terminal se kaise run karte hain

## Folder Structure

Day-1/
└── app.js

## Day-1 Steps

### Step 1: Import Express

Express ko require karke project me import kiya.
const express = require("express");

### Step 2: Create Server Instance

express() ko call karke server ka instance banaya.
const app = express();
Ye `app` pura backend server ko represent karta hai.


### Step 3: Start Server

Server ko port 3000 pe start kiya.
app.listen(3000);
3000 ek port number hai
Koi bhi free port number use kiya ja sakta hai.

### Step 4: Run Server

Terminal me server run karne ke liye:
node app.js
Isse backend server start ho jata hai.


## Extra Concepts Learned

### Node.js
Node.js ek JavaScript runtime environment hai
Jo JavaScript ko browser ke bahar run karne deta hai.

### HTTP Methods (Basic Idea)
* GET  → data bhejne ke liye
* POST → data lene ke liye
(Frontend se backend ko data POST se jata hai
Backend se frontend ko data GET se aata hai)

### Nodemon (Tool)
Nodemon ek tool hai jo server ko automatically restart karta hai
jab bhi code change hota hai.




