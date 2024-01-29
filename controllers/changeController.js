const changeController = (req, res) => {
    try {
        const { token, password } = req.body;

        res.send(password);
    } catch (error) {
        console.log(error);
    }
};

module.exports = changeController;
