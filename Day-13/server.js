const express = require("express");
const multer = require("multer");


const storage = multer.diskStorage(
    {
    destination:(req,file,cb) => {
        return cb(null,"./uploads");
    },
    filename:(req,file,cb) => {
        return cb(null,file.originalname);
    }
    }
)

const upload = multer({storage});

const app = express();

app.get("/",(req,res)=>{
    res.send("ok");
});

app.post("/send-file",upload.single("image"),(req,res)=>{
    console.log(req.file);
    res.send('file data');
});

app.listen(3000,()=>{
    console.log("server is running at port 3000");

})