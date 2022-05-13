const express = require('express');
const router = express.Router();
const contactController = require('../controller/contactController')

/* GET contact page. */
router.get('/', contactController.contact);

module.exports = router;
