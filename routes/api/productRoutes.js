const express = require("express");
const _ = express.Router();
const multer = require("multer");
const catagoryController = require("../../controllers/CategoryController");
const allCategoryController = require("../../controllers/allCatagoryController");
const deleteCategoryController = require("../../controllers/deleteCategoryController");
const editCatagotyController = require("../../controllers/editCatagoryController");
const approveCatagotyController = require("../../controllers/approveCategoryController ");
const allSubCatagory = require("../../controllers/allSubCatagory");
const subCatagoryCreate = require("../../controllers/subCatagoryCteate");
const ProductsController = require("../../controllers/productControll");
const createStoreController = require("../../controllers/createStoreController ");
const allStore = require("../../controllers/allStore");

//
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./uploads");
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null, file.fieldname + "-" + uniqueSuffix + "-" + file.originalname);
    },
});

const upload = multer({ storage: storage });

_.get("/allcatagory", allCategoryController);
_.get("/allSubcatagory", allSubCatagory);
_.get("/allstore/:id", allStore);
_.post("/catagory", catagoryController);
_.post("/deletcatagory", deleteCategoryController);
_.post("/editcatagory", editCatagotyController);
_.post("/approvecatagory", approveCatagotyController);
_.post("/subCatagoryCreate", subCatagoryCreate);
_.post("/createProduct", upload.single("images"), ProductsController);
_.post("/createStore", createStoreController);

module.exports = _;
