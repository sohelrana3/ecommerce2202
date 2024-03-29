let User = require("../model/userSchema");
const bcrypt = require("bcrypt");

let loginController = async (req, res) => {
    let { email, password } = req.body;

    console.log(email, password);

    let existingUser = await User.find({ email: email });

    if (existingUser.length == 0) {
        res.send({ error: "Credencial is not valid" });
    } else {
        bcrypt.compare(
            password,
            existingUser[0].password,
            function (err, result) {
                if (result) {
                    
                    const { password, ...data } = existingUser[0]._doc;
                    res.send(data);
                } else {
                    res.send({ error: "Credencial is not valid" });
                }
            }
        );
    }
};

module.exports = loginController;
