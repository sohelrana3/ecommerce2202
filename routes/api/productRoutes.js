const express = require("express");
const _ = express.Router();
const catagoryController = require("../../controllers/CategoryController");

_.post("/catagory", catagoryController);

module.exports = _;
