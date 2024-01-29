const User = require("../model/userSchema");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");

// forotpassword function create

const forgotpasswordController = async (req, res) => {
    try {
        const { email } = req.body;

        const existingUser = await User.find({ email: email });

        if (existingUser.length == 0) {
            res.send({ error: "Credencial is not valid" });
        } else {
            jwt.sign(
                { email: email },
                "123456",

                async function (err, token) {
                    console.log(token);
                    const existingUser2 = await User.updateOne(
                        { email: email },
                        { $set: { token: token } },
                        { returnNewDocument: true, new: true, strict: false }
                    );
                    const transporter = nodemailer.createTransport({
                        service: "gmail",
                        auth: {
                            user: "expartdesigns5@gmail.com",
                            pass: "aolz berp jnou uhkb",
                        },
                    });

                    const info = await transporter.sendMail({
                        from: "expartdesigns5@gmail.com",
                        to: existingUser[0].email,
                        subject: "forgotpassword",
                        html: `<div style="display: flex;width: 600px;height: 200px;"> <div style="width: 50%;height: 100px;">Please Verify your email by click on this button <a href="http://localhost:5173/changepassword/${token}">Verify</a></div></div>`,
                    });
                    res.send({ success: "Check your email" });
                }
            );
        }
    } catch (error) {
        console.log(error);
    }
};

module.exports = forgotpasswordController;
