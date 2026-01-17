const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("hello yaaroo");
});

app.get("/about", (req, res) => {
    res.send("mei about hunnn");
});

app.get("/home", (req, res) => {
    res.send("mein home huuu ");
});

app.listen(3001);


/*
=======================
Day 2 – Backend Steps
=======================

Step 1: Import Express
Express is imported using require().
It is used to create server and APIs.

Step 2: Create Express App
app is the server instance created using express().
All routes and logic are attached to this app.

Step 3: Create GET Route (/)
This route runs when root path (/) is accessed.
It sends a simple response to the browser.
This whole route is also called an API.

Step 4: Path Understanding
"/" means root path.
When user opens localhost:3001/, this route runs.

Step 5: Create GET Route (/about)
This route runs when /about path is accessed.
Server sends a response related to about page.

Step 6: Create GET Route (/home)
This route runs when /home path is accessed.
Server sends a response related to home page.

Step 7: Multiple Routes Concept
One server can handle multiple routes.
Each route can send different responses.

Step 8: Start Server
app.listen() starts the server.
Server listens on port 3001 for incoming requests.

=======================
End of Day 2
=======================
*/
