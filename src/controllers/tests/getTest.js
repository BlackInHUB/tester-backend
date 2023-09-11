const {Test} = require('../../models');
const mongoose = require('mongoose');

const getTest = async (req, res) => {
    const {_id} = req.params;
    
    const test = await Test.aggregate([
        { "$match": { _id: new mongoose.Types.ObjectId(_id)}},
        {$project: {
        author: 1,
        options: 1,
        category: 1,
        questions: 1,
        passedUsers: {$size: "$passedUsers"},
        maxScore: {$max: "$results.score"},
        bestTime: {$min: "$results.time"}
    }}]);

    res.status(200).json(test);
};

module.exports = getTest;