const express = require("express");
// const http = require("http")


const app = express();
// const app = http.createserver((req,res)=>{    res.end("Hello from HTTP Server"); })

app.listen(3000);


/*
=======================
Day 1 – Backend Steps
=======================

Step 1: Import Express
Ye import statement hai express ko use karne ke liye.
Ye older way hai (CommonJS) jisme require() use hota hai.

Step 2: Create Server Instance
express() ko call karke hum server ka instance banate hain.
Ye app pura backend server ko represent karta hai.

Step 3: Start the Server
app.listen(3000) server ko start karta hai.
3000 ek port number hai, ye koi bhi number ho sakta hai.

Step 4: Run the Server
Server run karne ke liye terminal me command use hoti hai:
node app.js

Isse backend server start ho jata hai.

=======================
End of Day 1
=======================
*/

// Node.js => js run time env
// to get data in backend we use post and to send data we use get ( opp of react )
// Nodemon to make server make the update as we change 