const User = require("../model/userSchema");
const bcrypt = require('bcrypt');
const nodemailer = require("nodemailer");

// forotpassword function create

const forgotpassword = (req, res) => {
    res.send("forgotpassword")
};

module.exports = forgotpassword;
