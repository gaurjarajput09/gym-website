import bgImage from "../assets/images/backgroungimage1.jpg";

const About = () => {
  return (
    <div className="page-container">
      <section className="main-section">
        <div className="section-header">
          <span className="section-tag">About The Hulk</span>
          <h2 className="section-title">The Sanctuary of Strength</h2>
        </div>

        <div className="about-grid">
          <div className="about-img-container">
            <img 
              src={bgImage}
              alt="Inside The Hulk Premium Gym" 
              className="about-img"
            />
          </div>

          <div>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "28px", fontWeight: "700", marginBottom: "20px", textTransform: "uppercase" }}>
              Our Philosophy
            </h3>
            <p style={{ color: "var(--text-secondary)", lineHeight: "1.7", marginBottom: "20px", fontSize: "15px" }}>
              At THE HULK, we don't believe in quick fixes or watered-down training routines. We believe in raw effort, dedicated consistency, and scientific programming. 
            </p>
            <p style={{ color: "var(--text-secondary)", lineHeight: "1.7", marginBottom: "30px", fontSize: "15px" }}>
              Founded in Bangalore, our goal is to offer a premium space that merges elite-level equipment with high-caliber training guidance. Whether you are aiming to break powerlifting records, sculpt your physique, or optimize your physical output, our space is designed to help you execute.
            </p>

            <div className="about-stats">
              <div className="stat-item">
                <div className="stat-num">12K+</div>
                <div className="stat-label">Sq. Feet Area</div>
              </div>
              <div className="stat-item">
                <div className="stat-num">15+</div>
                <div className="stat-label">Expert Coaches</div>
              </div>
              <div className="stat-item">
                <div className="stat-num">2000+</div>
                <div className="stat-label">Active Members</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
