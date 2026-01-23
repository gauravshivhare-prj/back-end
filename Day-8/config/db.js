const { default: mongoose } = require("mongoose");

const connectDB = async () => {
  try {
    let res = await mongoose.connect(process.env.MONGO_URI);
    if (res) {
      console.log("mongodb Connected");
    }
  } catch (error) {
    console.log("error while connectin db", error);
  }
};

module.exports = connectDB;


// (process.env.MONGO_URI) url of global server mongodb cluster which we created atlas 

// go to mongodb atlas sign in 
// then makea free cluster
// connect it to mongodb of your computer 
