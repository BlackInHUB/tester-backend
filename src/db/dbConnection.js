const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const {DB_URL} = process.env;

const dbConnection = () => {
    return mongoose.connect(DB_URL);
};

module.exports = dbConnection;