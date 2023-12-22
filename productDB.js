require("dotenv").config();
const connectDB = require("./db/connect");
const Product = require("./models/product");

const ProductJson = require("./products.json");

const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        await Product.deleteMany();// this line i use previous data delete and added new data into database
        await Product.create(ProductJson);
        console.log("success");
    } catch (error) {
        console.log(error);
    }
};

start();