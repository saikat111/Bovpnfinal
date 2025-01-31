const express = require('express');
const router = express.Router();
const adController = require('../controllers/adController');

// Get Ad Configuration
router.get('/config', adController.getAdConfig);

// Display Ad
router.post('/display', adController.displayAd);

module.exports = router;
