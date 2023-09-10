const express = require('express');
const {authenticate, upload} = require('../middlewares');
const {asyncWrapper} = require('../helpers');
const controllers = require('../controllers/tests');

const router = new express.Router();

router.post('/create', authenticate, asyncWrapper(controllers.create));

router.post('/upload', authenticate, upload.single('image'), asyncWrapper(controllers.upload));

router.get('/getall', authenticate, asyncWrapper(controllers.getTests));

router.get('/get/:_id', authenticate, asyncWrapper(controllers.getTest));

router.patch('/sendresults/:_id', authenticate, asyncWrapper(controllers.sendTestResults));

module.exports = router;