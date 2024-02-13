const express = require("express");
const _ = express.Router();
const catagoryController = require("../../controllers/CategoryController");
const allCategoryController = require("../../controllers/allCatagoryController")

_.post("/catagory", catagoryController);
_.get("/allcatagory", allCategoryController);

module.exports = _;
