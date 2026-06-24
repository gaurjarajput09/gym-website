import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-col">
          <h3>THE HULK</h3>
          <p>Experience Bangalore's most premium fitness sanctuary. Equipped with top-of-the-line machines, expert coaches, and personal training programs engineered for transformation.</p>
        </div>
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Plans">Plans</Link></li>
            <li><Link to="/Trainers">Trainers</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h3>Support</h3>
          <ul className="footer-links">
            <li><Link to="/FAQ">FAQ</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
            <li><Link to="/BMI">BMI Calculator</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h3>Location</h3>
          <p>New BEL Road, Bangalore<br />Karnataka, India</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} The Hulk Gym. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
