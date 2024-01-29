const User = require("../model/userSchema");
const bcrypt = require('bcrypt');
const nodemailer = require("nodemailer");

// forotpassword function create

const forgotpassword = (req, res) => {
    const {email} = req.body;
     
    

    res.send(email)
};

module.exports = forgotpassword;
