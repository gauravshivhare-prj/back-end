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


