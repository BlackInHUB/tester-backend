const { httpError } = require('../../helpers');
const {User} = require('../../models');

const logout = async (req, res) => {
    const {_id} = req.user;

    const user = await User.findById(_id);

    if (!user) {
        throw httpError(401);
    };

    await User.findByIdAndUpdate({_id}, {token: ''});

    res.status(200).json({
        message: 'logout success'
    });
};

module.exports = logout;