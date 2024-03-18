const Variant = require("../model/VariantSchema");

const VariantController = (req, res) => {
    try {
        console.log(req.file);

        let { name, productId } = req.body;
        console.log(req.file);

        let Variantcreate = new Variant({
            name: name,
            image: `uploads/${req.file.filename}`,
            productId: productId,
        });
        Variantcreate.save();

        res.send({ success: "Variant Cteate Successfull" });
    
    } catch (error) {
        console.log(error);
    }
};

module.exports = VariantController;
