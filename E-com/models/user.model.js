const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema(
    {
   name:{
    type:String,
    required:true,
   },
   email:{
    type:String,
    required:true,
    unique:true
   },
   password:{
    type:String,
    minlength:6,
    required:true
   },
   mobile:{
    type:String,
    required:true,
    minlength:10,
    maxlength:10,
   },
   products:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"products"
   }],
   cart:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"cart",
   },

},
{
    timestamps:true
}
);

const userModel = mongoose.model("users",userSchema);

module.exports = userModel;