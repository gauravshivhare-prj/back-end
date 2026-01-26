# Day-3 ✅ (POST Request + Middleware + Postman)

Day-3 me maine Express me **POST request**, **middleware**, aur **req.body** ka concept sikha.

Is day me maine:
- express.json() middleware use kiya
- POST API banayi
- Postman se data bhejna sikha

---

## Folder Structure

Day-3/
└── app.js

## Day-3 Steps

### Step 1: Import Express
Express ko require karke project me import kiya.
const express = require("express");

### Step 2: Create Express App

express() ko call karke server instance banaya.
const app = express();

### Step 3: Use JSON Middleware

app.use(express.json());
express.json() middleware req.body se JSON data read karta hai.
POST request ke liye ye mandatory hota hai.

### Step 4: Create Notes Array

const notes = [];
Ye array temporarily data store karne ke liye hai.
(Data memory me store hota hai, database me nahi)

### Step 5: Understand HTTP Methods

* GET  → data fetch karne ke liye
* POST → data send karne ke liye

### Step 6: Create POST API (/notes)

app.post("/notes", (req, res) => {
  const userData = req.body;
  console.log(userData);
});

Client se aaya data `req.body` me milta hai.

### Step 7: Testing API using Postman

Method:POST

URL:http://localhost:3003/notes

Body → raw → JSON
{
  "title": "test title",
  "description": "test description"
}

### Step 8: Start Server

app.listen(3003);
Server port 3003 pe run karega.

## Concepts Learned

* Middleware
* POST request
* req.body
* Postman usage
* Backend request flow
