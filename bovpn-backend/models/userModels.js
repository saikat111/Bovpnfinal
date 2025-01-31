const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  subscriptionStatus: { type: String, default: 'free' },
  googleId: { type: String, required: false },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
