const Subscription = require('../models/subscriptionModel');
const Plan = require('../models/subscriptionPlanModel');

// Get all subscription plans
const getPlans = async (req, res) => {
  try {
    const plans = await Plan.find();
    res.json({ plans });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching plans' });
  }
};

// Create a new subscription
const subscribe = async (req, res) => {
  const { userId, planId } = req.body;
  try {
    const plan = await Plan.findById(planId);
    if (!plan) return res.status(400).json({ message: 'Plan not found' });

    const subscription = new Subscription({
      userId,
      planId,
      endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) // 30 days later
    });

    await subscription.save();
    res.status(201).json(subscription);
  } catch (err) {
    res.status(500).json({ message: 'Error subscribing' });
  }
};

const unsubscribe = async (req, res) => {
    const { subscriptionId } = req.params;
  
    try {
      // Attempt to find the subscription by ID and delete it
      const subscription = await Subscription.findByIdAndDelete(subscriptionId);
  
      // If subscription not found, return an error
      if (!subscription) {
        return res.status(404).json({
          message: 'Subscription not found',
          errorDetails: `No subscription found with ID: ${subscriptionId}`
        });
      }
  
      // Successfully unsubscribed, return success message
      res.json({
        message: 'Successfully unsubscribed',
        subscriptionId: subscriptionId
      });
    } catch (err) {
      // Log the error to the console for debugging purposes
      console.error("Error during unsubscribe:", err);
  
      // Return more detailed error message in the response
      let errorMessage = 'Error unsubscribing';
      
      // Check the type of error
      if (err.name === 'MongoError') {
        errorMessage = 'Database error occurred while unsubscribing';
      } else if (err.name === 'ValidationError') {
        errorMessage = 'Validation error occurred while unsubscribing';
      } else if (err.name === 'CastError') {
        errorMessage = 'Invalid subscription ID format';
      }
  
      // Return error response with detailed message
      return res.status(500).json({
        message: errorMessage,
        errorDetails: err.message,
        stackTrace: err.stack
      });
    }
  };
  
  

// Get subscription status
const getStatus = async (req, res) => {
  const { subscriptionId } = req.params;
  try {
    const subscription = await Subscription.findById(subscriptionId);
    if (!subscription) return res.status(404).json({ message: 'Subscription not found' });

    res.json({ status: subscription.status, startDate: subscription.startDate, endDate: subscription.endDate });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching subscription status' });
  }
};

module.exports = { getPlans, subscribe, unsubscribe, getStatus };
