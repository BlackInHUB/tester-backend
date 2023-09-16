const {Category} = require('../../models');

const getCategories = async (req, res) => {
    const categories = await Category.find({});

    res.status(200).json(categories);
};

module.exports = getCategories;