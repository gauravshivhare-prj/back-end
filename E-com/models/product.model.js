const { default: mongoose } = require("mongoose");

const productSchema = new mongoose.Schema(
    {
      productName:{
        type:String,
        required:true,
      },
      description:{
        type:String,
        required:true,
      },
      price:{
        amount:{
            type:String,
            required:true,
        },
        currency:{
            type:String,
            enum: ["INR", "$"],
          default: "INR",
        },
      },
      images:[
       {
        type:String,
        maxlength:5,
        required:true,
       }
      ],
      user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
      },     
    },
    {
       timestamps:true,
    }
);

const productModel = mongoose.model("products",productSchema);

module.exports = productModel;