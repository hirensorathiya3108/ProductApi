const mongoose = require("mongoose");

// uri = "mongodb+srv://jalsorathiya2023:YNXhx56HHYX5CkUp@jalapi.rcqx7ft.mongodb.net/JalAPI?retryWrites=true&w=majority";
//uri = "mongodb+srv://jalsorathiya2023:YNXhx56HHYX5CkUp@jalapi.rcqx7ft.mongodb.net/JalAPI?retryWrites=true&w=majority"

const connectDB = (uri) => {
    // console.log("connect database =>");
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};

module.exports = connectDB;