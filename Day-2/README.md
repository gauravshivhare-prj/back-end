# Day-2 ✅ (Express Routing Basics)

Day-2 me maine Express me **routing concept** sikha.

Is day me maine:
- Multiple GET routes banaye
- Different URLs pe different responses send kiye
- Routing ka basic flow samjha


## Folder Structure

Day-2/
└── app.js

## Day-2 Steps

### Step 1: Import Express
Express ko require karke project me import kiya.
const express = require("express");

### Step 2: Create Express App

express() ko call karke server instance banaya.

const app = express();

Ye `app` pura backend server ko represent karta hai.

### Step 3: Create GET Route (/)

Root path ke liye route banaya.

app.get("/", (req, res) => {
  res.send("hello yaaroo");
});

Jab user browser me open kare:

http://localhost:3001/

Response milega:
hello yaaroo

### Step 4: Create GET Route (/about)

app.get("/about", (req, res) => {
  res.send("mei about hunnn");
});

Open:
http://localhost:3001/about


### Step 5: Create GET Route (/home)

app.get("/home", (req, res) => {
  res.send("mein home huuu");
});

Open:
http://localhost:3001/home

### Step 6: Start Server

app.listen(3001);
Server port 3001 pe run karega.

## Concepts Learned

* Express Routing
* GET request
* URL paths
* Request and Response cycle
* One server → multiple routes


