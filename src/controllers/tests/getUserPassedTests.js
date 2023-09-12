const {Test} = require('../../models');
const mongoose = require('mongoose');

const getUserPassedTests = async (req, res) => {
    const {_id} = req.user;
    
    const test = await Test.aggregate([
        { "$match": { "passedUsers": _id }},
        {$project: {
        author: 1,
        options: 1,
        category: 1,
        questions: { $size:"$questions" },
        passedUsers: {$size: "$passedUsers"},
        maxScore: {$max: "$results.score"},
        bestTime: {$min: "$results.time"}
    }}]);

    res.status(200).json(test);
};

module.exports = getUserPassedTests;