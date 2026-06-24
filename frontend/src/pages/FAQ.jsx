import { useState } from "react";

const faqData = [
  {
    category: "Membership",
    icon: "💳",
    questions: [
      {
        q: "What membership plans do you offer?",
        a: "We offer three plans — Basic (₹1,499/mo), Pro (₹2,999/mo), and Elite (₹4,999/mo). Each plan includes different perks from basic gym access to personal training sessions and nutrition guidance."
      },
      {
        q: "Is there a free trial available?",
        a: "Yes! We offer a complimentary 1-day premium pass for all new visitors. You can register on our website or visit the front desk to claim yours."
      },
      {
        q: "Can I freeze or pause my membership?",
        a: "Pro and Elite members can freeze their membership for up to 30 days per year at no additional cost. Basic members can freeze for up to 15 days."
      },
      {
        q: "What is the cancellation policy?",
        a: "You can cancel your membership anytime with a 15-day notice period. No cancellation fees apply for memberships older than 3 months."
      }
    ]
  },
  {
    category: "Training",
    icon: "🏋️",
    questions: [
      {
        q: "What are the gym timings?",
        a: "Monday to Saturday: 5:00 AM – 11:00 PM. Sunday: 7:00 AM – 4:00 PM. We're open 365 days a year, including holidays."
      },
      {
        q: "Do you provide personal trainers?",
        a: "Absolutely! We have 15+ certified trainers with 10+ years of experience each. Personal training is included in Pro and Elite plans, or available as an add-on for Basic members."
      },
      {
        q: "What type of equipment do you have?",
        a: "We feature Hammer Strength racks, premium Olympic plates, advanced cardio machines (treadmills, spin bikes, rowing), functional training rigs, and a dedicated CrossFit zone."
      },
      {
        q: "Are group classes included?",
        a: "Yes, for Pro and Elite members. We offer Yoga, HIIT, Zumba, Spin, Functional Training, and CrossFit classes throughout the week."
      }
    ]
  },
  {
    category: "Facilities",
    icon: "🏢",
    questions: [
      {
        q: "Do you have locker rooms and showers?",
        a: "Yes, we have premium locker rooms with hot/cold showers, steam rooms (Elite members), towel service, and complimentary toiletries."
      },
      {
        q: "Is parking available?",
        a: "We have a dedicated parking lot for members with 50+ car slots and 100+ two-wheeler slots. Parking is free for all members."
      },
      {
        q: "Do you have a supplement/protein shop?",
        a: "Yes! Our in-house nutrition bar offers protein shakes, supplements, energy drinks, and healthy snacks at member-discounted prices."
      },
      {
        q: "Is Wi-Fi available at the gym?",
        a: "Yes, complimentary high-speed Wi-Fi is available throughout the facility for all members."
      }
    ]
  },
  {
    category: "General",
    icon: "❓",
    questions: [
      {
        q: "Where are you located?",
        a: "We're located at 74, New BEL Road, Bangalore, Karnataka, 560054, India. Easily accessible by metro and bus."
      },
      {
        q: "What is the minimum age to join?",
        a: "Members must be at least 16 years old. Members under 18 require a parent/guardian consent form signed at the time of registration."
      },
      {
        q: "Can I bring a guest?",
        a: "Pro members get 2 guest passes per month, Elite members get unlimited guest passes. Basic members can purchase a day pass for their guest at ₹299."
      },
      {
        q: "Do you offer corporate packages?",
        a: "Yes! We have special corporate rates for companies enrolling 10+ employees. Contact us at info@thehulkpremium.com for a customized quote."
      }
    ]
  }
];

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState("Membership");
  const [openIndex, setOpenIndex] = useState(null);

  // Custom question form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const currentFAQ = faqData.find((f) => f.category === activeCategory);

  const toggleQuestion = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !question) return;

    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message: question }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Failed to submit question");
      } else {
        setSuccess(true);
        setName("");
        setEmail("");
        setQuestion("");
      }
    } catch (err) {
      setError("Server error. Please try again later.");
    }
    setLoading(false);
  };

  return (
    <div className="page-container">
      <section className="main-section">
        <div className="section-header">
          <span className="section-tag">Support</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
        </div>

        {/* Category Tabs */}
        <div className="faq-categories">
          {faqData.map((cat) => (
            <button
              key={cat.category}
              className={`faq-category-btn ${activeCategory === cat.category ? "active" : ""}`}
              onClick={() => {
                setActiveCategory(cat.category);
                setOpenIndex(null);
              }}
            >
              <span className="faq-cat-icon">{cat.icon}</span>
              {cat.category}
            </button>
          ))}
        </div>

        {/* Accordion */}
        <div className="faq-accordion">
          {currentFAQ &&
            currentFAQ.questions.map((item, idx) => (
              <div
                key={idx}
                className={`faq-item ${openIndex === idx ? "open" : ""}`}
              >
                <button
                  className="faq-question"
                  onClick={() => toggleQuestion(idx)}
                >
                  <span>{item.q}</span>
                  <span className="faq-arrow">{openIndex === idx ? "−" : "+"}</span>
                </button>
                <div className="faq-answer-wrapper">
                  <div className="faq-answer">
                    <p>{item.a}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Custom Question Form */}
        <div className="faq-custom-form-container" style={{ marginTop: "60px", maxWidth: "600px", marginLeft: "auto", marginRight: "auto" }}>
          <div className="glass-panel" style={{ padding: "40px", borderRadius: "20px" }}>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "22px", textTransform: "uppercase", marginBottom: "10px", textAlign: "center" }}>
              Didn't Find Your Answer?
            </h3>
            <p style={{ color: "var(--text-secondary)", fontSize: "14px", marginBottom: "25px", textAlign: "center" }}>
              Ask a question below, and our training staff will get back to you.
            </p>

            {success && (
              <div style={{
                background: "rgba(74, 222, 128, 0.1)",
                color: "#4ade80",
                padding: "16px",
                borderRadius: "8px",
                marginBottom: "20px",
                fontSize: "14px",
                textAlign: "center"
              }}>
                ✓ Question submitted successfully! We'll email you soon.
              </div>
            )}

            {error && (
              <div style={{
                background: "rgba(239, 68, 68, 0.1)",
                color: "#ef4444",
                padding: "16px",
                borderRadius: "8px",
                marginBottom: "20px",
                fontSize: "14px",
                textAlign: "center"
              }}>
                ✗ {error}
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  style={{
                    width: "100%",
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    borderRadius: "8px",
                    padding: "12px 16px",
                    color: "var(--text-primary)",
                    outline: "none"
                  }}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{
                    width: "100%",
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    borderRadius: "8px",
                    padding: "12px 16px",
                    color: "var(--text-primary)",
                    outline: "none"
                  }}
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Question..."
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  required
                  rows="4"
                  style={{
                    width: "100%",
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    borderRadius: "8px",
                    padding: "12px 16px",
                    color: "var(--text-primary)",
                    outline: "none",
                    resize: "none"
                  }}
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="btn-premium btn-premium-solid"
                style={{ width: "100%", border: "none", padding: "14px", fontWeight: "700" }}
              >
                {loading ? "Submitting..." : "Submit Question"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
