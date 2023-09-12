const {Test, User} = require('../../models');
const mongoose = require('mongoose');

const getTestDetails = async (req, res) => {
    const {_id} = req.params;
    
    const test = await Test.aggregate([
        { "$match": { _id: new mongoose.Types.ObjectId(_id)}},
        {$project: {
        author: 1,
        options: 1,
        category: 1,
        questions: 1,
        passedUsers: 1,
        results: 1, 
        maxScore: {$max: "$results.score"},
        bestTime: {$min: "$results.time"}
    }}]);

    await User.populate(test, {path: 'results.user', select: ('name')});

    res.status(200).json(test);
};

module.exports = getTestDetails;