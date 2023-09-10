const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true
    },
    questions: {
        type: Array,
        require: true
    },
    options: {
        type: Object,   
    },
    passedUsers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }],
    results: {
        type: Array
    },
});

const Test = mongoose.model('Test', testSchema);

module.exports = Test;