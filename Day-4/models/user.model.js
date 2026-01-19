const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:String,
});

const UserModel = mongoose.model("users",userSchema);

module.exports = UserModel;


/*
===============================
STEPS / COMMENTS (Notes)
===============================

Step 1: mongoose import kiya
- mongoose Node.js aur MongoDB ke beech ka bridge hai.

Step 2: Schema banaya
- Schema ka kaam hota hai data ka structure define karna
- yaha userSchema me field: name (String) define hai.

Step 3: Model banaya
- Model = schema + collection name
- UserModel se hi DB ke andar CRUD operations honge (create/find/update/delete)

Step 4: module.exports
- Taaki app.js me import karke use kar sake.
*/