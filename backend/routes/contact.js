const express = require("express");
const Contact = require("../models/Contact");

const router = express.Router();

// POST /api/contact
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newContact = new Contact({
      name,
      email,
      message,
    });
    await newContact.save();

    res.status(201).json({
      message: "Your message has been received! We'll get back to you soon.",
    });
  } catch (error) {
    console.error("Contact error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
