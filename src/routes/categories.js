const express = require('express');
const {authenticate, upload} = require('../middlewares');
const {asyncWrapper} = require('../helpers');
const controllers = require('../controllers/category');

const router = new express.Router();

router.get('/getall', authenticate, asyncWrapper(controllers.getCategories));

module.exports = router;