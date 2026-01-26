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

