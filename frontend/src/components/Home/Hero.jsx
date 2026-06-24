import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="hero-overlay"></div>
      
      {/* Premium Gym background video with poster fallback */}
      <video 
        src="https://cdn.pixabay.com/video/2022/08/09/87298-746871290_640.mp4" 
        autoPlay 
        loop 
        muted 
        playsInline 
        poster="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1920&auto=format&fit=crop"
        className="hero-bg-media"
      />

      <div className="hero-content">
        <div>
          <span className="hero-tag">New BEL Road, Bangalore</span>
          <h1 className="hero-title">
            BUILD YOUR<br />
            <span>DREAM BODY</span><br />
            WITH THE ELITE.
          </h1>
          <p className="hero-desc">
            Experience Bangalore's most premium fitness sanctuary. Equipped with Hammer Strength, expert coaches, and personal training programs engineered for transformation.
          </p>
          <div className="hero-btns">
            <Link to="/Register" className="btn-premium btn-premium-solid">
              Book Free Trial
            </Link>
            <Link to="/About" className="btn-premium btn-premium-outline">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;