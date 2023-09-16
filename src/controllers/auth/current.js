const {User} = require('../../models');
const {httpError} = require('../../helpers');

const current = async (req, res) => {
    const {_id} = req.user;

    const user = await User.findById(_id, '-password -token');

    if (!user) {
        throw httpError(401);
    };

    res.status(200).json(user);
};

module.exports = current;
