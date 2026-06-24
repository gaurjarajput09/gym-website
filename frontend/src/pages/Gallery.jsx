import { useState } from "react";
import img1 from "../assets/images/img1.webp";
import img2 from "../assets/images/img2.webp";
import img3 from "../assets/images/img3.webp";
import img4 from "../assets/images/img4.webp";
import img5 from "../assets/images/img5.webp";
import img6 from "../assets/images/img6.webp";
import img7 from "../assets/images/img7.webp";
import img8 from "../assets/images/img8.jpg";
import img9 from "../assets/images/img9.webp";
import img10 from "../assets/images/img10.webp";

const Gallery = () => {
  const [filter, setFilter] = useState("all");

  const items = [
    {
      category: "gym",
      img: img1,
      title: "Strength Station"
    },
    {
      category: "gym",
      img: img2,
      title: "Dumbbells Area"
    },
    {
      category: "cardio",
      img: img3,
      title: "Treadmill Run"
    },
    {
      category: "cardio",
      img: img4,
      title: "Spin Bikes Setup"
    },
    {
      category: "crossfit",
      img: img5,
      title: "Functional Training"
    },
    {
      category: "crossfit",
      img: img6,
      title: "Heavy Ropes"
    },
    {
      category: "locker",
      img: img7,
      title: "Luxury Locker"
    },
    {
      category: "gym",
      img: img8,
      title: "Power Rack"
    },
    {
      category: "cardio",
      img: img9,
      title: "Rowing Machines"
    },
    {
      category: "crossfit",
      img: img10,
      title: "Kettlebell Zone"
    }
  ];

  const filteredItems = filter === "all" ? items : items.filter(x => x.category === filter);

  return (
    <div className="page-container">
      <section className="main-section">
        <div className="section-header">
          <span className="section-tag">Media Gallery</span>
          <h2 className="section-title">The Facility Showcase</h2>
        </div>

        <ul className="gallery-filters">
          <li>
            <button 
              className={`filter-btn ${filter === "all" ? "active" : ""}`}
              onClick={() => setFilter("all")}
            >
              All
            </button>
          </li>
          <li>
            <button 
              className={`filter-btn ${filter === "gym" ? "active" : ""}`}
              onClick={() => setFilter("gym")}
            >
              Gym Floor
            </button>
          </li>
          <li>
            <button 
              className={`filter-btn ${filter === "cardio" ? "active" : ""}`}
              onClick={() => setFilter("cardio")}
            >
              Cardio
            </button>
          </li>
          <li>
            <button 
              className={`filter-btn ${filter === "crossfit" ? "active" : ""}`}
              onClick={() => setFilter("crossfit")}
            >
              Crossfit
            </button>
          </li>
          <li>
            <button 
              className={`filter-btn ${filter === "locker" ? "active" : ""}`}
              onClick={() => setFilter("locker")}
            >
              Steam/Locker
            </button>
          </li>
        </ul>

        <div className="gallery-grid">
          {filteredItems.map((item, idx) => (
            <div key={idx} className="gallery-item">
              <img src={item.img} alt={item.title} className="gallery-img" />
              <div 
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(0deg, rgba(6,6,8,0.9) 0%, rgba(6,6,8,0.1) 60%, transparent 100%)",
                  display: "flex",
                  alignItems: "flex-end",
                  padding: "20px",
                  transition: "var(--transition)",
                  opacity: 0
                }}
                className="gallery-hover-overlay"
              >
                <h4 style={{ fontFamily: "var(--font-display)", color: "#fff", fontSize: "16px", textTransform: "uppercase" }}>
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Styled inline component overlay rules */}
      <style>{`
        .gallery-item:hover .gallery-hover-overlay {
          opacity: 1 !important;
        }
      `}</style>
    </div>
  );
};

export default Gallery;
