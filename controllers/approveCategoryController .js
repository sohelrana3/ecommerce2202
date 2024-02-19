const Category = require("../model/catagorySchema");
const approveCatagotyController = async (req, res) => {
    try {
        let { isActive, id } = req.body;

        await Category.findByIdAndUpdate({ _id: id }, { isActive: isActive });

        res.send({ success: "Status Change" });
    } catch (error) {
        console.log(error);
    }
};
module.exports = approveCatagotyController;
