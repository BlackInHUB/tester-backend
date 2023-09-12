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

router.get('/created', authenticate, asyncWrapper(controllers.getUserCreatedTests));

router.get('/passed', authenticate, asyncWrapper(controllers.getUserPassedTests));

router.get('/details/:_id', authenticate, asyncWrapper(controllers.getTestDetails));

module.exports = router;