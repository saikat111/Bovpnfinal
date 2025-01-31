const express = require('express');
const { googleLogin, googleLoginCallback, registerUser, getUserData } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Register User
router.post('/register', registerUser);

// Google Authentication
router.get('/google', googleLogin);
router.get('/google/callback', googleLoginCallback);

// Get User Data (Protected)
router.get('/user', authMiddleware, getUserData);

module.exports = router;
