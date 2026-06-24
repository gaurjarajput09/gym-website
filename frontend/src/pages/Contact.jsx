import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setLoading(true);
    setError("");

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Failed to send message");
        setLoading(false);
        return;
      }

      setSubmitted(true);
      setName("");
      setEmail("");
      setMessage("");
      setTimeout(() => {
        setSubmitted(false);
      }, 4000);
    } catch (err) {
      setError("Server not reachable. Make sure backend is running.");
    }
    setLoading(false);
  };

  return (
    <div className="page-container">
      <section className="main-section">
        <div className="section-header">
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">Contact The Hulk</h2>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <div className="contact-details">
                <h4>Location</h4>
                <p>74, New BEL Road, Bangalore, Karnataka, 560054, India</p>
              </div>
            </div>

            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <div className="contact-details">
                <h4>Phone & WhatsApp</h4>
                <p>+91 62659 35663</p>
              </div>
            </div>

            <div className="contact-item">
              <span className="contact-icon">✉️</span>
              <div className="contact-details">
                <h4>Email Contact</h4>
                <p>info@thehulkpremium.com</p>
              </div>
            </div>

            <div className="contact-item">
              <span className="contact-icon">⏰</span>
              <div className="contact-details">
                <h4>Training Hours</h4>
                <p>Mon - Sat: 5:00 AM - 11:00 PM</p>
                <p>Sun: 7:00 AM - 4:00 PM</p>
              </div>
            </div>
          </div>

          <div className="glass-panel">
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "20px", textTransform: "uppercase", marginBottom: "20px" }}>
              Send Us a Message
            </h3>
            
            {submitted ? (
              <div style={{
                background: "rgba(74, 222, 128, 0.1)",
                color: "#4ade80",
                padding: "16px",
                borderRadius: "8px",
                border: "1px solid rgba(74, 222, 128, 0.2)",
                fontSize: "14px",
                lineHeight: "1.5"
              }}>
                Thank you! Your inquiry has been submitted. One of our fitness coordinators will contact you shortly.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bmi-form">
                {error && (
                  <div style={{
                    background: "rgba(239, 68, 68, 0.1)",
                    color: "#ef4444",
                    padding: "12px",
                    borderRadius: "8px",
                    border: "1px solid rgba(239, 68, 68, 0.2)",
                    fontSize: "14px",
                    marginBottom: "10px"
                  }}>
                    {error}
                  </div>
                )}

                <div className="input-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="e.g. John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="input-field"
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="e.g. john@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="input-field"
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    rows="4"
                    placeholder="Tell us about your fitness goals..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="input-field"
                    style={{ resize: "none" }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-premium btn-premium-solid"
                  style={{ marginTop: "10px" }}
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Submit Inquiry"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
