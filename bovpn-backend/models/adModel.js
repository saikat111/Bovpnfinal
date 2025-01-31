const mongoose = require('mongoose');

const adSchema = new mongoose.Schema({
  adId: {
    type: String,
    required: true,
  },
  format: {
    type: String, // e.g., 'banner', 'video', 'popup'
    required: true,
  },
  imageUrl: {
    type: String, // URL for image (optional based on ad format)
  },
  videoUrl: {
    type: String, // URL for video (optional based on ad format)
  },
  clickUrl: {
    type: String, // URL to redirect when ad is clicked
    required: true,
  },
});

const Ad = mongoose.model('Ad', adSchema);
module.exports = Ad;
