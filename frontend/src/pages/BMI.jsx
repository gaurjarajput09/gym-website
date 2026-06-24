import { useState } from "react";

const BMI = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState("");
  const [color, setColor] = useState("");

  const calculateBMI = (e) => {
    e.preventDefault();
    if (!weight || !height) return;

    const heightInMeters = parseFloat(height) / 100;
    const calculatedBmi = parseFloat(weight) / (heightInMeters * heightInMeters);
    const roundedBmi = calculatedBmi.toFixed(1);
    setBmi(roundedBmi);

    let bmiStatus = "";
    let statusColor = "";

    if (calculatedBmi < 18.5) {
      bmiStatus = "Underweight";
      statusColor = "#38bdf8"; // Light Blue
    } else if (calculatedBmi >= 18.5 && calculatedBmi < 24.9) {
      bmiStatus = "Healthy Weight";
      statusColor = "#4ade80"; // Green
    } else if (calculatedBmi >= 25 && calculatedBmi < 29.9) {
      bmiStatus = "Overweight";
      statusColor = "#facc15"; // Gold
    } else {
      bmiStatus = "Obese";
      statusColor = "#f87171"; // Red
    }

    setStatus(bmiStatus);
    setColor(statusColor);
  };

  return (
    <div className="page-container">
      <section className="main-section">
        <div className="section-header">
          <span className="section-tag">Fitness Tools</span>
          <h2 className="section-title">Calculate Your BMI</h2>
        </div>

        <div className="bmi-wrapper">
          <div className="bmi-grid glass-panel">
            <div>
              <p style={{ color: "var(--text-secondary)", marginBottom: "25px", fontSize: "14px", lineHeight: "1.6" }}>
                Body Mass Index (BMI) is a simple metric that uses your height and weight to estimate body fat. Use this tool to track your physical baseline.
              </p>
              
              <form onSubmit={calculateBMI} className="bmi-form">
                <div className="input-group">
                  <label htmlFor="weight">Weight (kg)</label>
                  <input
                    type="number"
                    id="weight"
                    placeholder="e.g. 70"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    required
                    className="input-field"
                    min="20"
                    max="300"
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="height">Height (cm)</label>
                  <input
                    type="number"
                    id="height"
                    placeholder="e.g. 175"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    required
                    className="input-field"
                    min="50"
                    max="250"
                  />
                </div>

                <button type="submit" className="btn-premium btn-premium-solid" style={{ marginTop: "10px" }}>
                  Calculate Now
                </button>
              </form>
            </div>

            <div className="bmi-result-panel">
              {bmi ? (
                <>
                  <h3 style={{ fontSize: "16px", textTransform: "uppercase", letterSpacing: "1px", color: "var(--text-secondary)" }}>
                    Your Score
                  </h3>
                  <div className="bmi-score" style={{ color: color }}>
                    {bmi}
                  </div>
                  <div className="bmi-status" style={{ color: color }}>
                    {status}
                  </div>
                  <p style={{ fontSize: "13px", color: "var(--text-muted)", marginTop: "16px", lineHeight: "1.5" }}>
                    {status === "Healthy Weight" 
                      ? "Great job! Keep maintaining your strength & fitness training." 
                      : "Consider consulting our professional training staff to optimize your regime & nutrition."}
                  </p>
                </>
              ) : (
                <div style={{ color: "var(--text-muted)", fontSize: "14px" }}>
                  Enter stats to view results
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BMI;
