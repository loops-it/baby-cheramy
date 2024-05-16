
exports.index = async (req, res) => {
    try {
        res.render('index');
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
};