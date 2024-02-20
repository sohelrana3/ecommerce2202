const SubCategory = require("../model/subCatagorySchema");
let allSubCatagory = async (req, res) => {
    try {
        let data = await SubCategory.find({}).populate("categoryId");
        res.send(data);
    } catch (error) {
        console.log(error);
    }
};

module.exports = allSubCatagory;
