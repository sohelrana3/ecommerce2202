const Products = require("../model/productSchema");

const productController = (req, res) => {
    try {
        console.log(req.file);

        let { name, description, variant } = req.body;

        let product = new Products({
            name: name,
            description: description,
            image: `uploads/${req.file.filename}`,
            variant: variant,
        });
        product.save();

        res.send({ success: "Product Cteate Successfull" });
        console.log(product);
    } catch (error) {
        console.log(error);
    }
};

module.exports = productController;
