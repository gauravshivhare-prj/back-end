const express = require('express');
const mongoose = require('mongoose');
const UserModel = require('./models/user.model');

const connectDb = async() => {
    try {
        let res = await mongoose.connect("mongodb://0.0.0.0/crazy");
        if(res){
            console.log("MongoDb connected ")
        }
    } catch (error) {
        console.log("error while connecting MongoDb")
    }
}

connectDb()


const app = express();

app.get("/user-data",async(req,res)=>{
  let newUser = await UserModel.create({
        name:"Rahul",
  });

  res.send(newUser)
})

app.listen(3000,()=>{console.log("server running at 3000")})




