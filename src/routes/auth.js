const express = require('express');
const {asyncWrapper} = require('../helpers');
const controllers = require('../controllers/user');

const router = new express.Router();

router.post('/register', asyncWrapper(controllers.register));

router.post('/login', asyncWrapper(controllers.login));

module.exports = router;