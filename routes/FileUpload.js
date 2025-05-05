const express = require('express');
const router = express.Router();
const {localFileUpload} = require('../controller/fileUpload');
const {imgUpload} = require('../controller/fileUpload');

  router.post('/imageUpload', imgUpload);
// router.post('/videoUpload', videoUpload);
// router.post('/imageReducerUpload', imageReducerUpload);
router.post('/localFileUpload', localFileUpload);

module.exports = router;