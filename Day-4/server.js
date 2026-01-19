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





/*
===============================
PURE COMMENTS / THEORY + STEPS
===============================

Step 1: express import
- Express use hota hai server banane ke liye aur routes handle karne ke liye.

Step 2: mongoose import
- Mongoose ek ODM (Object Data Modeling) library hai jo Node.js ko MongoDB se connect karwata hai.

Step 3: UserModel import
- Ye model file se export hua tha.
- Is model ko use karke tu MongoDB me CRUD karega.

Step 4: app create kiya
- const app = express();
- Ye express server ka instance banata hai.

Step 5: connectDb function banaya
- async function banaya because MongoDB connection time leta hai.
- isliye async/await use karte hain.

Step 6: mongoose.connect()
- mongoose.connect("mongodb://0.0.0.0/crazy")
- "mongodb://0.0.0.0" => local mongodb server address
- "/crazy" => database name
- MongoDB me crazy naam ka DB connect ho jayega (exist na ho to ban bhi jayega)

Step 7: try/catch use kiya
- DB connect fail hua to crash na ho isliye error handle kiya.

Step 8: connectDb() call kiya
- server start hone se pehle DB connect karne ka attempt kiya.

Step 9: Route banaya "/user-data"
- app.get("/user-data", async(req,res)=>{})
- Jab user browser pe hit karega:
  http://localhost:3000/user-data
  tab ye route chalega.

Step 10: UserModel.create()
- create({ name:"Rahul" }) mongodb me data insert karega
- create() promise return karta hai, isliye await lagaya.

Step 11: res.send(newUser)
- Jo data insert hua wahi response me send kar diya
- newUser me _id bhi hota hai jo MongoDB auto generate karta hai.

Step 12: app.listen(3000)
- Server ko port 3000 pe start kar diya.
- Ab tera API ready hai.

===============================
IMPORTANT EXTRA POINTS
===============================

1) MongoDB/Mongoose ke mostly functions Promise return karte hain
- connect()
- create()
- find()
- updateOne()
- deleteOne()
Isliye async/await use hota hai.

2) "new" ka matlab
- new mongoose.Schema({})
- Schema constructor se naya Schema object create karna

3) Schema vs Model
- Schema = structure/format
- Model = collection ke upar CRUD karne ka tool
*/