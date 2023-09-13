const {Test, User} = require('../../models');
const mongoose = require('mongoose');

const getUserPassedTests = async (req, res) => {
    const {_id} = req.user;
    
    const tests = await Test.aggregate([
        { "$match": { "passedUsers": _id }},
        {$project: {
        author: 1,
        category: 1,
        results: {$filter: {
            input: "$results",
            as: 'results',
            cond: {"$eq": ["$$results.user", _id]}
        }},
        questions: { $size: "$questions" },
    }}]);

    await User.populate(tests, {path: 'author', select: ('name')});

    res.status(200).json(tests);
};

module.exports = getUserPassedTests;