import Hero from "../components/Home/Hero";
import About from "../pages/About";
import FAQ from "../pages/FAQ";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <div className="home-page">
        <Hero />

      {/* Features Overview */}
      <section className="main-section">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Why Choose Us</span>
          <h2 className="section-title">An Edge in Training</h2>
        </motion.div>

        <div className="features-grid">
          {[
            {
              icon: "🏋️‍♂️",
              title: "World-Class Equipment",
              desc: "Train with state-of-the-art Hammer Strength racks, premium Olympic plates, and advanced cardio equipment tailored to elite builders."
            },
            {
              icon: "📋",
              title: "Expert Coaching",
              desc: "Work with trainers carrying over 10+ years of active field experience, providing personalized guides and routine planning."
            },
            {
              icon: "⚡",
              title: "Elite Community",
              desc: "Surround yourself with driven individuals who push boundaries. Accountability and motivation are built into the ecosystem."
            }
          ].map((feature, idx) => (
            <motion.div 
              key={idx}
              className="glass-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <span className="feature-icon">{feature.icon}</span>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Premium CTA Panel */}
      <section className="main-section-alt" style={{ textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(circle at center, rgba(250, 204, 21, 0.08) 0%, transparent 60%)",
          zIndex: 1
        }}></div>
        
        <motion.div 
          style={{ position: "relative", zIndex: 2, maxWidth: "700px", margin: "0 auto" }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "40px", fontWeight: "800", textTransform: "uppercase", marginBottom: "20px" }}>
            Ready to Build Your <span style={{ color: "var(--accent)" }}>Legacy</span>?
          </h2>
          <p style={{ color: "var(--text-secondary)", marginBottom: "35px", fontSize: "16px", lineHeight: "1.6" }}>
            Get your 1-day premium pass for free. Experience the environment, meet our coaches, and see what you are capable of achieving.
          </p>
          <Link to="/Register" className="btn-premium btn-premium-solid">
            Claim Free Pass
          </Link>
        </motion.div>
      </section>
    </div>
      {/* About Section */}
      <About />
      {/* FAQ Section */}
      <FAQ />
    </>
  );
};

export default Home;