const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
}, {versionKey: false});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;

