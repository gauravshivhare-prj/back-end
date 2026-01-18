const express = require("express");

const app = express();

app.use(express.json());

const notes = [];

app.post("/notes", (req, res) => {
    const userData = req.body;
    console.log(userData);
});

app.listen(3003 , function () {
    console.log("server is running at port 3003");
});


/*
=======================
Day 3 – Backend Steps
=======================

Step 1: Import Express
Express is a Node.js framework used to create server and APIs easily.

Step 2: Create Express App
app represents the server instance which will handle requests and responses.

Step 3: Use JSON Middleware
express.json() is a middleware.
It is used to read data coming from request body (req.body).
Mainly required for POST requests with JSON data.

Step 4: Create a notes array
This array is used to temporarily store data sent from client.
(Data is stored in memory, not database)

Step 5: Understand HTTP methods
GET  -> used to fetch data
POST -> used to send data to server

Step 6: Create POST API (/notes)
This API receives data from client (Postman).
req.body contains the data sent in JSON format.
Data is logged in console for understanding request flow.

Step 7: Testing API using Postman
Method: POST
URL: http://localhost:3003/notes
Body: raw -> JSON
Example:
{
  "title": "test title",
  "description": "test description"
}

Step 8: Server Listening
app.listen() starts the server.
Server waits for incoming requests on given port.

=======================
End of Day 3
=======================
*/
