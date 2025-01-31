const Feedback = require("../models/feedback");
const User = require("../models/userModels");

exports.submitFeedback = async (req, res) => {
  try {
    const { userId, feedback } = req.body;

    if (!userId || !feedback) {
      return res.status(400).json({ error: "User ID and feedback are required" });
    }

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ error: "User not found" });

    const newFeedback = new Feedback({ userId, feedback });
    await newFeedback.save();

    res.json({ message: "Feedback submitted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
