const express = require('express');
const router = express.Router();
const newsController = require('../controller/newsController');

router.get('/', newsController.news);

module.exports = router;