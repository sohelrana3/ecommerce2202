const SubCategory = require("../model/subCatagorySchema");

let subCatagoryCreate = async (req, res) => {
    try {
        const { name, categoryId } = req.body;

        let subCatagoryCreate = new SubCategory({
            name: name,
            categoryId: categoryId,
        }); 
        subCatagoryCreate.save();
        res.send({ success: "Subcategory Created Successfull" });
    } catch (error) {
        console.log(error);
    }
};

module.exports = subCatagoryCreate;
