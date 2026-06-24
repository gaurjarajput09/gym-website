const mongoose = require("mongoose");

const FaqSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    default: "❓",
  },
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
  order: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Faq", FaqSchema);
