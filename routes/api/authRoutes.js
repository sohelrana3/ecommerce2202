const express = require("express");
const _ = express.Router();
const registrationController = require("../../controllers/registrationController");
const otpController = require("../../controllers/otpController");
const loginController = require("../../controllers/loginController");
const forgotpassword = require("../../controllers/forgotpasswordController");
const changeController = require("../../controllers/changeController")
const allUserController = require("../../controllers/allUserController")


_.post("/registration", registrationController);
_.post("/otpverify", otpController);
_.post("/login", loginController);
_.post("/forgotpassword", forgotpassword);
_.post("/changepassword", changeController);
_.get("/alluser", allUserController)

module.exports = _;
