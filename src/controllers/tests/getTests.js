const {Test, User} = require('../../models');

const getTests = async (req, res) => {
    const {category} = req.query;
    
    if (category) {
        const tests = await Test.aggregate([
            { "$match": { "category": category }},
            {$project: {
            author: 1,
            options: 1,
            category: 1,
            questions: { $size:"$questions" },
            passedUsers: {$size: "$passedUsers"},
            maxScore: {$max: "$results.score"},
            bestTime: {$min: "$results.time"}
        }}]);

        await User.populate(tests, {path: 'author', select: ('name')});

        return res.status(200).json(tests);
    };

    const tests = await Test.aggregate([{$project: {
        author: 1,
        options: 1,
        category: 1,
        questions: { $size:"$questions" },
        passedUsers: {$size: "$passedUsers"},
        maxScore: {$max: "$results.score"},
        bestTime: {$min: "$results.time"}
    }}]);

    await User.populate(tests, {path: 'author', select: ('name')});

    res.status(200).json(tests);
};

module.exports = getTests;