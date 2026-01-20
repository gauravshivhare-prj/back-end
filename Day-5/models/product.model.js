const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    currency: {
      type: String,
      default: "INR",
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const ProductModel = mongoose.model("Person", productSchema);

module.exports = ProductModel;


/*
=======================
Day 5 – models/product.model.js
=======================

Step 1:
mongoose import kiya schema/model banane ke liye.

Step 2:
productSchema banaya using new mongoose.Schema()

Step 3:
Schema fields define kiye:
- productName (String, required)
- price (Number, required)
- currency (String, default: INR)
- description (String, required)

Step 4:
timestamps: true
Isse automatically createdAt & updatedAt fields create ho jaate hain.

Step 5:
mongoose.model("Person", productSchema)
Isse model create hota hai jo DB me save/find etc ka kaam karega.

Step 6:
Model export kiya taaki server.js me use ho sake.

-----------------------------------
Inflection Rule Reminder:
-----------------------------------
Model ka name singular hota hai,
but collection MongoDB me plural ban jaati hai.
Person -> people (special plural form)
Product -> products

=======================
End
=======================
*/
