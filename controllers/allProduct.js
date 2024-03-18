const Product = require("../model/productSchema");

const allProductControllar = async (req, res) => {
    try {
     
        const allproduct = await Product.find({});
        res.send(allproduct);
    } catch (error) {
        console.log(error);
    }
};

module.exports = allProductControllar;
