const {Test} = require('../../models');

const create = async (req, res) => {
    const {_id: author} = req.user;

    const result = await Test.create({author, ...req.body});

    return res.status(201).json({
        author: result.author,
        _id: result._id,
        questions: result.questions.length,
        options: result.options,
        category: result.category
    });
};

module.exports = create;