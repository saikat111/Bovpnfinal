const mongoose = require('mongoose');

const adConfigSchema = new mongoose.Schema({
  formats: {
    type: [String], // e.g., ['banner', 'video', 'popup']
    required: true,
  },
  frequency: {
    type: String, // e.g., 'daily', 'weekly'
    required: true,
  },
});

const AdConfig = mongoose.model('AdConfig', adConfigSchema);
module.exports = AdConfig;
