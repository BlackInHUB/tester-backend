const create = require('./create');
const upload = require('./upload');
const getTests = require('./getTests');
const getTest = require('./getTest');
const sendTestResults = require('./sendTestResults');
const getUserCreatedTests = require('./getUserCreatedTests');
const getUserPassedTests = require('./getUserPassedTests');
const getTestDetails = require('./getTestDetails');

module.exports = {
    create,
    upload,
    getTests,
    getTest,
    sendTestResults,
    getUserCreatedTests,
    getUserPassedTests,
    getTestDetails
};