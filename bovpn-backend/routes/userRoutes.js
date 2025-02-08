const express = require('express');
const { googleLogin, googleLoginCallback, registerUser, getUserData } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

const userRoutes = express.Router();

// Register User
userRoutes.post('/register', registerUser);

// Google Authentication
// router.get('/google', googleLogin);
// router.get('/google/callback', googleLoginCallback);

// Get User Data (Protected)
userRoutes.get('/user', authMiddleware, getUserData);

module.exports = userRoutes;
