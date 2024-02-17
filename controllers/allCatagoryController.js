const Category = require("../model/catagorySchema");
const allCategoryController = async (req, res) => {
    let catagoryData = await Category.find({}).populate("ownerId");

    res.send(catagoryData);
};

module.exports = allCategoryController;
