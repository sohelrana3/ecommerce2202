const express = require("express");
const _ = express.Router();
const catagoryController = require("../../controllers/CategoryController");
const allCategoryController = require("../../controllers/allCatagoryController");
const deleteCategoryController = require("../../controllers/deleteCategoryController");
const editCatagotyController = require("../../controllers/editCatagoryController");
const approveCatagotyController = require("../../controllers/approveCategoryController ");
const allSubCatagory = require("../../controllers/allSubCatagory");
const subCatagoryCreate = require("../../controllers/subCatagoryCteate")

_.get("/allcatagory", allCategoryController);
_.get("/allSubcatagory", allSubCatagory);
_.post("/catagory", catagoryController);
_.post("/deletcatagory", deleteCategoryController);
_.post("/editcatagory", editCatagotyController);
_.post("/approvecatagory", approveCatagotyController);
_.post("/subCatagoryCreate", subCatagoryCreate);

module.exports = _;
