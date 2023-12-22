const Product = require("../models/product");


const getAllProducts = async (req, res) => {
    const { company, name, featured, price, sort, select } = req.query;
    const queryObject = {};

    // Data filter method start
    if (company) {
        queryObject.company = company;
    }

    if (featured) {
        queryObject.featured = featured;
    }

    if (name) {
        queryObject.name = { $regex: name, $options: "i" };
    }


    if (price) {
        queryObject.price = price;
    }

    // Data filter method close

    let apiData = Product.find(queryObject);

    // sort data 
    if (sort) {
        let sortFix = sort.split(",").join(" ");
        apiData = apiData.sort(sortFix);
    }

    // selection only show
    if (select) {
        // let selectFix = select.replace(",", " ");
        let selectFix = select.split(",").join(" ");
        apiData = apiData.select(selectFix);
    }

    // Pagination method start
    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 3;
    //Pagination formula
    let skip = (page - 1) * limit;

    // page = 2;
    // limit = 3;
    // skip = 1 * 3 = 3;

    apiData = apiData.skip(skip).limit(limit);
    // Pagination method close

    console.log(queryObject);

    // nbHits: myData.length this method is work show data length in page end 

    const myData = await apiData;
    res.status(200).json({ myData, nbHits: myData.length });
};

const getAllProductsTesting = async (req, res) => {
    const myTestingData = await Product.find(req.query);
    res.status(200).json({ myTestingData });
};

module.exports = { getAllProducts, getAllProductsTesting };
