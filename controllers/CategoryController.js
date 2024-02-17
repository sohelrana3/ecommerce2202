const Category = require("../model/catagorySchema");

const categoryController = (req, res) => {
    try {
        let { name, ownerId } = req.body;

        let catagoryData = new Category({
            name: name,
            ownerId: ownerId,
        });
        catagoryData.save();
        res.send({ success: `${name}Catagory Create` });
    } catch (error) {
        console.log(error);
    }
};

module.exports = categoryController;
