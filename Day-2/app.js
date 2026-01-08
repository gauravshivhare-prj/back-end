const express = require("express");  // import

const app = express(); // server instance 

app.get("/",(req,res)=>{
    res.send("hello yaaroo")
})            
// (/)path mein run hoga ye or isse routing kahenge 

app.get("/about",(req,res)=>{
    res.send("mei about hunnn")
})

app.get("/home",(req,res)=>{
    res.send("mein home huuu ")
})

app.listen(3001); // server start