const register = require('./register');
const login = require('./login');
const logout = require('./logout');
const getUsers = require('./getUsers');
const current = require('./current');

module.exports = {
    register,
    login,
    logout,
    getUsers,
    current
};