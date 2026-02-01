const { default: mongoose } = require("mongoose");

const connectDB = async () => {
    try {
        let res = await mongoose.connect("mongodb://0.0.0.0/e-com");
        if( res ) {
            console.log("MongoDB connected");
        }
    } catch (error) {
        console.log("error while connecting db", error);
    }
}

module.exports = connectDB;