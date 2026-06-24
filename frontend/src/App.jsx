import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import BackgroundParticles from "./components/layout/BackgroundParticles";
import Home from "./pages/Home";
import About from "./pages/About";
import Plans from "./pages/Plans";
import Trainers from "./pages/Trainers";
import BMI from "./pages/BMI";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import FAQ from "./pages/FAQ";
import Chatbot from "./components/Chatbot/Chatbot";
import "./App.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-col">
          <Link to="/" className="nav-logo" style={{ marginBottom: "15px" }}>
            THE <span>HULK</span>
          </Link>
          <p>
            The premium fitness sanctuary for elite performance, progressive strength training, and lifestyle transformation.
          </p>
        </div>
        <div className="footer-col">
          <h3>Explore</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About Us</Link></li>
            <li><Link to="/Plans">Pricing Plans</Link></li>
            <li><Link to="/Trainers">Our Trainers</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h3>Tools</h3>
          <ul className="footer-links">
            <li><Link to="/BMI">BMI Calculator</Link></li>
            <li><Link to="/Gallery">Media Gallery</Link></li>
            <li><Link to="/FAQ">FAQ</Link></li>
            <li><Link to="/Contact">Contact Support</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h3>Contact</h3>
          <p style={{ marginBottom: "10px" }}>
            📍 74, New BEL Road, Bangalore, KA, India
          </p>
          <p style={{ marginBottom: "10px" }}>
            ✉️ info@thehulkpremium.com
          </p>
          <p>
            📞 +91 62659 35663
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} THE HULK Premium Fitness. All rights reserved.</p>
        <p>Built with Passion for Fitness & Performance</p>
      </div>
    </footer>
  );
};

function App() {
  return (
    <div className="page-container">
      <BackgroundParticles />
      <Navbar />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Plans" element={<Plans />} />
          <Route path="/Trainers" element={<Trainers />} />
          <Route path="/BMI" element={<BMI />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/FAQ" element={<FAQ />} />
        </Routes>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;