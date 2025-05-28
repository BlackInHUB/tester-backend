const express = require('express');
const { asyncWrapper } = require('../helpers');
const controllers = require('../controllers/category');

const router = new express.Router();

router.get('/getall', asyncWrapper(controllers.getCategories));

module.exports = router;
