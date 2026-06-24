import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import hulkLogo from "../../assets/images/hulkimage.jpg";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`navbar-wrapper ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <Link to="/" className="nav-logo" onClick={() => setMobileMenuOpen(false)}>
          <img 
            src={hulkLogo} 
            alt="The Hulk Logo" 
            style={{ 
              height: "40px", 
              width: "40px", 
              borderRadius: "50%", 
              objectFit: "cover", 
              border: "2px solid var(--accent)" 
            }} 
          />
          THE <span>HULK</span>
        </Link>

        <nav className={`nav-menu ${mobileMenuOpen ? "open" : ""}`}>
          <NavLink
            to="/"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/About"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/Plans"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Plans
          </NavLink>
          <NavLink
            to="/Trainers"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Trainers
          </NavLink>
          <NavLink
            to="/BMI"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            BMI Calc
          </NavLink>
          <NavLink
            to="/Gallery"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Gallery
          </NavLink>
          <NavLink
            to="/FAQ"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            FAQ
          </NavLink>
          <NavLink
            to="/Contact"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </NavLink>
        </nav>

        <div className="nav-actions">
          <Link to="/Register" className="btn-premium btn-premium-solid btn-nav-cta">
            Join Now
          </Link>
          
          <button 
            className="mobile-toggle" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;