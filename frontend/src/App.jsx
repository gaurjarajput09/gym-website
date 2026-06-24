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

import Footer from "./components/layout/Footer";

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