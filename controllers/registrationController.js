const User = require("../model/userSchema");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const otpGenerator = require("otp-generator");
const emailValidation = require("../helpers/emailValidation");
const passwordValidation = require("../helpers/passwordValidation");

let registrationController = async (req, res) => {
    try {
        let { name, email, password } = req.body;

        let existingUser = await User.find({ email: email });

        if (existingUser.length == 0) {
            if (!name) {
                res.send("Name Required");
            } else if (!email) {
                res.send("Email Required");
            } else if (!password) {
                res.send("Password Required");
            } else {
                if (email) {
                    if (!emailValidation(email)) {
                        return res.send(" valid Email Required");
                    }
                }
                if (password) {
                    if (!passwordValidation(password)) {
                        return res.send(
                            " Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"
                        );
                    }
                }
                // otp
                let otp = otpGenerator.generate(10, {
                    upperCaseAlphabets: false,
                    specialChars: true,
                });

                bcrypt.hash(password, 10, async function (err, hash) {
                    let user = new User({
                        name: name,
                        email: email,
                        password: hash,
                        otp: otp,
                    });

                    user.save();

                    const transporter = nodemailer.createTransport({
                        service: "gmail",
                        auth: {
                            user: "expartdesigns5@gmail.com",
                            pass: "aolz berp jnou uhkb",
                        },
                    });

                    const info = await transporter.sendMail({
                        from: "expartdesigns5@gmail.com",
                        to: email,
                        subject: "Verify your Email",
                        html: `<div style="display: flex;width: 600px;height: 200px;"> <div style="width: 50%;height: 100px;">Please Verify your email by click on this button <a href="https://www.figma.com/">Verify</a>${otp}</div></div>`,
                    });

                    res.send(user);
                });
            }
        } else {
            res.send("Email Already Exits");
        }
    } catch (err) {
        res.send(err);
    }
};

module.exports = registrationController;
