const {Test} = require('../../models');

const getTest = async (req, res) => {
    const {_id} = req.params;
    
    const test = await Test.findById(_id);
    
    res.status(200).json(test);
};

module.exports = getTest;