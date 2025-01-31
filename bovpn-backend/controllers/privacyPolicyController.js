const PrivacyPolicy = require("../models/PrivacyPolicy");

exports.getPrivacyPolicy = async (req, res) => {
  try {
    const policy = await PrivacyPolicy.findOne().sort({ updatedAt: -1 });
    if (!policy) return res.status(404).json({ error: "Privacy policy not found" });

    res.json({ policy: policy.content, updatedAt: policy.updatedAt });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
