const {Test} = require('../../models');

const sendTestResults = async (req, res) => {
    const {_id: user} = req.user;
    const {_id} = req.params;
    
    await Test.findByIdAndUpdate({_id}, {$push: {'passedUsers': user, 'results': {user, ...req.body}}}, {new: true});

    res.status(200).json({
        message: 'Results succssesfully saved.'
    });
};

module.exports = sendTestResults;