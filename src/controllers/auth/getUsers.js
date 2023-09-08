const {User} = require('../../models');

const getUsers = async (req, res) => {
    const users = await User.find().select('_id name');

    res.status(200).json(users);
};

module.exports = getUsers;