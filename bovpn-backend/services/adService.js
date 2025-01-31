const Ad = require("../models/adModel");
const AdConfig = require("../models/adConfigModel");
const User = require("../models/userModels"); // Assuming you have a User model

// Get Ad Configuration from DB
exports.getAdConfig = async () => {
  try {
    const config = await AdConfig.findOne();
    if (!config) {
      throw new Error("Ad configuration not found");
    }
    return config;
  } catch (err) {
    throw new Error("Failed to fetch ad configuration");
  }
};

// Display Ad based on format and user ID
exports.getAd = async (userId, adFormat) => {
  try {
    // Validate if the user exists
    const user = await User.findById(userId);
    if (!user) {
      throw new Error("User not found");
    }

    // Fetch an ad based on the format
    const ad = await Ad.findOne({ format: adFormat });
    if (!ad) {
      throw new Error("Ad not found");
    }

    return {
      format: ad.format,
      imageUrl: ad.imageUrl || null,
      videoUrl: ad.videoUrl || null,
      clickUrl: ad.clickUrl,
      userId: userId, // Link userId in response for debugging
    };
  } catch (err) {
    throw new Error("Failed to fetch ad");
  }
};
