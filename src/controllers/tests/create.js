const {Test} = require('../../models');

const create = async (req, res) => {
    const {_id: author} = req.user;

    const result = await Test.create({author, questions: req.body});

    return res.status(201).json(result);
};

module.exports = create;