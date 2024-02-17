const Category = require("../model/catagorySchema");
const editCatagotyController = async (req, res) => {
    try {
        const { name, id } = req.body;

        await Category.findByIdAndUpdate({ _id: id }, { name: name });

        res.send({ success: "Edit Successfull" });
    } catch (error) {
        console.log(error);
    }
};
module.exports = editCatagotyController;
