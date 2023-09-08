const express = require('express');
const {asyncWrapper} = require('../helpers');
const controllers = require('../controllers/auth');
const { authenticate } = require('../middlewares');

const router = new express.Router();

router.post('/register', asyncWrapper(controllers.register));

router.post('/login', asyncWrapper(controllers.login));

router.get('/logout', authenticate, asyncWrapper(controllers.logout));

router.get('/users', authenticate, asyncWrapper(controllers.getUsers));

module.exports = router;