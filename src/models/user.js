const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: emailRegexp
    },
    password: {
        type: String,
        required: true
    },
    token: {
        type: String,
    }
}, {versionKey: false});

const User = mongoose.model('User', userSchema);

module.exports = User;