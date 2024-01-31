const User = require("../model/userSchema");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const passwordValidation = require("../helpers/passwordValidation");

const changeController = (req, res) => {
    try {
        const { token, password } = req.body;

        jwt.verify(token, "123456", async function (err, decoded) {
            console.log(decoded.email); // bar

            // passwordValidation
            if (password) {
                if (!passwordValidation(password)) {
                    return res.send({
                        error: " Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character",
                    });
                }
            }

            bcrypt.hash(password, 10, async function (err, hash) {
                let existingUser2 = await User.findOneAndUpdate(
                    { email: decoded.email },
                    { $set: { password: hash, token: "" } },
                    {
                        returnNewDocument: true,
                        new: true,
                        strict: false,
                    }
                );
                res.send({success: "Password Update successfull"})
            });
        });
    } catch (error) {
        console.log(error);
    }
};

module.exports = changeController;
