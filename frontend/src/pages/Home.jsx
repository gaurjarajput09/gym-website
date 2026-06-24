import Hero from "../components/Home/Hero";
import About from "../pages/About";
import FAQ from "../pages/FAQ";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="home-page">
        <Hero />

      {/* Features Overview */}
      <section className="main-section">
        <div className="section-header">
          <span className="section-tag">Why Choose Us</span>
          <h2 className="section-title">An Edge in Training</h2>

        </div>

        <div className="features-grid">
          <div className="glass-card">
            <span className="feature-icon">🏋️‍♂️</span>
            <h3 className="feature-title">World-Class Equipment</h3>
            <p className="feature-desc">
              Train with state-of-the-art Hammer Strength racks, premium Olympic plates, and advanced cardio equipment tailored to elite builders.
            </p>
          </div>

          <div className="glass-card">
            <span className="feature-icon">📋</span>
            <h3 className="feature-title">Expert Coaching</h3>
            <p className="feature-desc">
              Work with trainers carrying over 10+ years of active field experience, providing personalized guides and routine planning.
            </p>
          </div>

          <div className="glass-card">
            <span className="feature-icon">⚡</span>
            <h3 className="feature-title">Elite Community</h3>
            <p className="feature-desc">
              Surround yourself with driven individuals who push boundaries. Accountability and motivation are built into the ecosystem.
            </p>
          </div>
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
        
        <div style={{ position: "relative", zIndex: 2, maxWidth: "700px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "40px", fontWeight: "800", textTransform: "uppercase", marginBottom: "20px" }}>
            Ready to Build Your <span style={{ color: "var(--accent)" }}>Legacy</span>?
          </h2>
          <p style={{ color: "var(--text-secondary)", marginBottom: "35px", fontSize: "16px", lineHeight: "1.6" }}>
            Get your 1-day premium pass for free. Experience the environment, meet our coaches, and see what you are capable of achieving.
          </p>
          <Link to="/Register" className="btn-premium btn-premium-solid">
            Claim Free Pass
          </Link>
        </div>
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