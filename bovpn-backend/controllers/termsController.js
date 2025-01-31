const Terms = require("../models/Terms");

exports.getTermsOfService = async (req, res) => {
  try {
    const terms = await Terms.findOne().sort({ updatedAt: -1 });
    if (!terms) return res.status(404).json({ error: "Terms of service not found" });

    res.json({ terms: terms.content, updatedAt: terms.updatedAt });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
