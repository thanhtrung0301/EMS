const express = require('express');
const router = express.Router();
const serviceController = require('../controller/serviceController');

router.get('/last-mile', serviceController.lastMile);

router.get('/forwarder', serviceController.forwarder);

router.get('/warehouse', serviceController.warehouse);

module.exports = router;