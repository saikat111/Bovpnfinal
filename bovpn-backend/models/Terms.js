const mongoose = require("mongoose");

const TermsSchema = new mongoose.Schema({
  content: { type: String, required: true },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Terms", TermsSchema);
