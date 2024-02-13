const Category = require("../model/catagorySchema");
const allCategoryController = async (req, res) => {
    let catagoryData = await Category.find({});

    res.send(catagoryData);
};

module.exports = allCategoryController;
