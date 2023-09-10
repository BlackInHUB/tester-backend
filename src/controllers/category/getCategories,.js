const {Category} = require('../../models');

const getCategories = async (req, res) => {
    const categorys = await Category.find({});

    res.status(200).json(categorys);
};

module.exports = getCategories;