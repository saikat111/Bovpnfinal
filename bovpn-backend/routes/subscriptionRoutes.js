const express = require('express');
const { getPlans, subscribe, unsubscribe, getStatus } = require('../controllers/subscriptionController');

const router = express.Router();

// Get all subscription plans
router.get('/plans', getPlans);

// Subscribe to a plan
router.post('/', subscribe);

// Unsubscribe from a plan
router.delete('/:subscriptionId', unsubscribe);

// Get subscription status
router.get('/:subscriptionId', getStatus);

module.exports = router;
