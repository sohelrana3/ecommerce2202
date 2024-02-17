const express = require("express");
const _ = express.Router();
const catagoryController = require("../../controllers/CategoryController");
const allCategoryController = require("../../controllers/allCatagoryController");
const deleteCategoryController = require("../../controllers/deleteCategoryController");
const editCatagotyController = require("../../controllers/editCatagoryController")

_.get("/allcatagory", allCategoryController);
_.post("/catagory", catagoryController);
_.post("/deletcatagory", deleteCategoryController);
_.post("/editcatagory", editCatagotyController);

module.exports = _;
