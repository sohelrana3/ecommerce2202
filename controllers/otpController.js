let User = require("../model/userSchema");

let otpController = async (req, res) => {
    let { email, otp } = req.body;
    let data = await User.find({ email: email });

    console.log(data[0].otp);

    if (data[0].otp == otp) {
        await User.findOneAndUpdate(
            { email: email },
            { otp: "", verify: true }
        );
        res.send({
            success: "Verify",
            data: "otp Verify successfull",
        });
    } else {
        res.send({ error: "otp not match" });
    }
};

module.exports = otpController;
