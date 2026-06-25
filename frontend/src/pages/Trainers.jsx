import trainerImg1 from "../assets/images/trainer1.jpg";
import trainerImg2 from "../assets/images/trainer2.jpg";
import trainerImg3 from "../assets/images/trainer3.jpg";
import trainerImg4 from "../assets/images/trainer4.jpg";
import trainerImg5 from "../assets/images/trainer5.jpg";

const Trainers = () => {
  const trainers = [
    {
      name: "Trainer 1",
      role: "Fitness Coach",
      img: trainerImg1
    },
    {
      name: "Trainer 2",
      role: "Fitness Coach",
      img: trainerImg2
    },
    {
      name: "Trainer 3",
      role: "Fitness Coach",
      img: trainerImg3
    },
    {
      name: "Trainer 4",
      role: "Fitness Coach",
      img: trainerImg4
    },
    {
      name: "Trainer 5",
      role: "Fitness Coach",
      img: trainerImg5
    }
  ];

  return (
    <div className="page-container">
      <section className="main-section">
        <div className="section-header">
          <span className="section-tag">Our Experts</span>
          <h2 className="section-title">Elite Training Staff</h2>
        </div>

        <div className="trainers-grid">
          {trainers.map((tr, idx) => (
            <div key={idx} className="trainer-card">
              <img src={tr.img} alt={tr.name} className="trainer-img" />
              <div className="trainer-overlay">
                <h3 className="trainer-name">{tr.name}</h3>
                <p className="trainer-role">{tr.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Trainers;
