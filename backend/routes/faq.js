const express = require("express");
const Faq = require("../models/Faq");

const router = express.Router();

// GET /api/faq — Get all FAQs grouped by category
router.get("/", async (req, res) => {
  try {
    const faqs = await Faq.find().sort({ category: 1, order: 1 });

    // Group by category
    const grouped = {};
    faqs.forEach((faq) => {
      if (!grouped[faq.category]) {
        grouped[faq.category] = {
          category: faq.category,
          icon: faq.icon,
          questions: [],
        };
      }
      grouped[faq.category].questions.push({
        _id: faq._id,
        q: faq.question,
        a: faq.answer,
      });
    });

    res.json(Object.values(grouped));
  } catch (error) {
    console.error("FAQ fetch error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// POST /api/faq — Add a new FAQ
router.post("/", async (req, res) => {
  try {
    const { category, icon, question, answer, order } = req.body;

    if (!category || !question || !answer) {
      return res.status(400).json({ message: "category, question, and answer are required" });
    }

    const newFaq = new Faq({ category, icon, question, answer, order });
    await newFaq.save();

    res.status(201).json({ message: "FAQ added successfully!", faq: newFaq });
  } catch (error) {
    console.error("FAQ create error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// POST /api/faq/seed — Seed all default FAQs (run once)
router.post("/seed", async (req, res) => {
  try {
    const count = await Faq.countDocuments();
    if (count > 0) {
      return res.status(400).json({ message: `Database already has ${count} FAQs. Delete them first if you want to re-seed.` });
    }

    const defaultFaqs = [
      // Membership
      { category: "Membership", icon: "💳", order: 1, question: "What membership plans do you offer?", answer: "We offer three plans — Basic (₹1,499/mo), Pro (₹2,999/mo), and Elite (₹4,999/mo). Each plan includes different perks from basic gym access to personal training sessions and nutrition guidance." },
      { category: "Membership", icon: "💳", order: 2, question: "Is there a free trial available?", answer: "Yes! We offer a complimentary 1-day premium pass for all new visitors. You can register on our website or visit the front desk to claim yours." },
      { category: "Membership", icon: "💳", order: 3, question: "Can I freeze or pause my membership?", answer: "Pro and Elite members can freeze their membership for up to 30 days per year at no additional cost. Basic members can freeze for up to 15 days." },
      { category: "Membership", icon: "💳", order: 4, question: "What is the cancellation policy?", answer: "You can cancel your membership anytime with a 15-day notice period. No cancellation fees apply for memberships older than 3 months." },

      // Training
      { category: "Training", icon: "🏋️", order: 1, question: "What are the gym timings?", answer: "Monday to Saturday: 5:00 AM – 11:00 PM. Sunday: 7:00 AM – 4:00 PM. We're open 365 days a year, including holidays." },
      { category: "Training", icon: "🏋️", order: 2, question: "Do you provide personal trainers?", answer: "Absolutely! We have 15+ certified trainers with 10+ years of experience each. Personal training is included in Pro and Elite plans, or available as an add-on for Basic members." },
      { category: "Training", icon: "🏋️", order: 3, question: "What type of equipment do you have?", answer: "We feature Hammer Strength racks, premium Olympic plates, advanced cardio machines (treadmills, spin bikes, rowing), functional training rigs, and a dedicated CrossFit zone." },
      { category: "Training", icon: "🏋️", order: 4, question: "Are group classes included?", answer: "Yes, for Pro and Elite members. We offer Yoga, HIIT, Zumba, Spin, Functional Training, and CrossFit classes throughout the week." },

      // Facilities
      { category: "Facilities", icon: "🏢", order: 1, question: "Do you have locker rooms and showers?", answer: "Yes, we have premium locker rooms with hot/cold showers, steam rooms (Elite members), towel service, and complimentary toiletries." },
      { category: "Facilities", icon: "🏢", order: 2, question: "Is parking available?", answer: "We have a dedicated parking lot for members with 50+ car slots and 100+ two-wheeler slots. Parking is free for all members." },
      { category: "Facilities", icon: "🏢", order: 3, question: "Do you have a supplement/protein shop?", answer: "Yes! Our in-house nutrition bar offers protein shakes, supplements, energy drinks, and healthy snacks at member-discounted prices." },
      { category: "Facilities", icon: "🏢", order: 4, question: "Is Wi-Fi available at the gym?", answer: "Yes, complimentary high-speed Wi-Fi is available throughout the facility for all members." },

      // General
      { category: "General", icon: "❓", order: 1, question: "Where are you located?", answer: "We're located at 74, New BEL Road, Bangalore, Karnataka, 560054, India. Easily accessible by metro and bus." },
      { category: "General", icon: "❓", order: 2, question: "What is the minimum age to join?", answer: "Members must be at least 16 years old. Members under 18 require a parent/guardian consent form signed at the time of registration." },
      { category: "General", icon: "❓", order: 3, question: "Can I bring a guest?", answer: "Pro members get 2 guest passes per month, Elite members get unlimited guest passes. Basic members can purchase a day pass for their guest at ₹299." },
      { category: "General", icon: "❓", order: 4, question: "Do you offer corporate packages?", answer: "Yes! We have special corporate rates for companies enrolling 10+ employees. Contact us at info@thehulkpremium.com for a customized quote." },
    ];

    await Faq.insertMany(defaultFaqs);
    res.status(201).json({ message: `Successfully seeded ${defaultFaqs.length} FAQs into the database!` });
  } catch (error) {
    console.error("FAQ seed error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
