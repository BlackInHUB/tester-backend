const jwt = require('jsonwebtoken');
const {User} = require('../models');
const {httpError} = require('../helpers');

const authenticate = async (req, res, next) => {
    const {authorization  = ''} = req.headers;
    const [type, token] = authorization.split(' ');

    if (type !== 'Bearer' || !token) {
        next(httpError(401));
    };

    try {
        const {_id} = jwt.verify(token, process.env.JWT);
        const user = await User.findById(_id);
        
        if (!user || !user.token) {
            next(httpError(401));
        };

        req.user = user;
        next();

    } catch(error) {
        next(httpError(401));
    };
};

module.exports = authenticate;