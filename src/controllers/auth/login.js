const {User} = require('../../models');
const jwt = require('jsonwebtoken');
const {httpError} = require('../../helpers');
const bcrypt = require('bcrypt');

const login = async (req, res) => {
    const {email, password} = req.body;

    const user = await User.findOne({email});

    if (!user || !await bcrypt.compare(password, user.password)) {
        throw httpError(401, 'Wrong email or password.');
    };

    const token = jwt.sign({_id: user._id, email: user.email}, process.env.JWT);

    await User.findByIdAndUpdate({_id: user._id}, {token}, {new: true});

    res.status(200).json({
        user: {...user._doc, password: null},
        token
    });
};

module.exports = login;