const adService = require("../services/adService");

// Get Ad Configuration
exports.getAdConfig = async (req, res) => {
  try {
    const config = await adService.getAdConfig();
    res.json(config);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Display Ad
exports.displayAd = async (req, res) => {
  const { userId, adFormat } = req.body;

  if (!userId || !adFormat) {
    return res.status(400).json({ message: "userId and adFormat are required" });
  }

  try {
    const adData = await adService.getAd(userId, adFormat);
    res.json(adData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
