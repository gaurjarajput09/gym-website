import { Link } from "react-router-dom";
import bgImage from "../../assets/images/backgroundimage2.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="hero-overlay"></div>
      
      {/* Background Image */}
      <motion.img 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        src={bgImage} 
        alt="Gym Background"
        className="hero-bg-media"
      />

      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
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
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;