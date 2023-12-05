const express = require("express");
const _ = express.Router();
const registrationController = require("../../controllers/registrationController");
const otpController = require("../../controllers/otpController");
const loginController = require("../../controllers/loginController");
const forgotpassword = require("../../controllers/forgotpassword");

_.post("/registration", registrationController);
_.post("/otpverify", otpController);
_.post("/login", loginController);
_.post("/forgotpassword", forgotpassword);

module.exports = _;
