const {Test} = require('../../models');

const getTests = async (req, res) => {
    const tests = await Test.find({});

    res.status(200).json(tests);
};

module.exports = getTests;