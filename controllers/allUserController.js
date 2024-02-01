const User = require("../model/userSchema");

const allUserController = async (req, res) => {
    userList = await User.find({});
    res.send(userList);
};

module.exports = allUserController;
