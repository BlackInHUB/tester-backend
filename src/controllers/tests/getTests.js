const {Test} = require('../../models');

const getTests = async (req, res) => {
    const tests = await Test.aggregate([{$project: {author: 1, options: 1, questions: { $size:"$questions" }}}]);

    res.status(200).json(tests);
};

module.exports = getTests;