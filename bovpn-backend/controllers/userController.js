const User = require('../models/userModels');
const jwt = require('jsonwebtoken');
const passport = require('passport');

// Register User
const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const newUser = new User({ username, email, password });
    await newUser.save();

    res.status(201).json({
      user: { username: newUser.username, email: newUser.email, subscriptionStatus: newUser.subscriptionStatus },
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Get User Data
const getUserData = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ user: { username: user.username, email: user.email, subscriptionStatus: user.subscriptionStatus } });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Google Login (Redirect)
const googleLogin = passport.authenticate('google', { scope: ['profile', 'email'] });

// Google Login Callback
const googleLoginCallback = (req, res, next) => {
  passport.authenticate('google', { session: false }, async (err, user) => {
    if (err || !user) {
      return res.status(400).json({ message: 'Authentication failed' });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({
      user: { username: user.username, email: user.email, subscriptionStatus: user.subscriptionStatus },
      token,
    });
  })(req, res, next);
};

module.exports = { googleLogin, googleLoginCallback, registerUser, getUserData };
