const Category = require("../model/catagorySchema");
const deleteCategoryController = async (req, res) => {
    try {
        const { id } = req.body;

        await Category.findByIdAndDelete({ _id: id });
        res.send({ success: "Category Delete Successfull" });
    } catch (error) {
        console.log(error);
    }
};

module.exports = deleteCategoryController;
