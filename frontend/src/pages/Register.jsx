import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) return;

    setLoading(true);
    setError("");

    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Registration failed");
        setLoading(false);
        return;
      }

      // Save token
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      setSuccess(true);
    } catch (err) {
      setError("Server not reachable. Make sure backend is running.");
    }
    setLoading(false);
  };

  return (
    <div className="page-container" style={{ justifyContent: "center", alignItems: "center" }}>
      <div className="auth-wrapper glass-panel">
        <h2 className="auth-title">Join The Hulk</h2>
        <p className="auth-subtitle">Get your free trial pass instantly</p>

        {success ? (
          <div style={{
            background: "rgba(74, 222, 128, 0.1)",
            color: "#4ade80",
            padding: "16px",
            borderRadius: "8px",
            border: "1px solid rgba(74, 222, 128, 0.2)",
            textAlign: "center"
          }}>
            Registration complete! Welcome to THE HULK! 💪
          </div>
        ) : (
          <form onSubmit={handleRegister} className="bmi-form">
            {error && (
              <div style={{
                background: "rgba(239, 68, 68, 0.1)",
                color: "#ef4444",
                padding: "12px",
                borderRadius: "8px",
                border: "1px solid rgba(239, 68, 68, 0.2)",
                fontSize: "14px",
                marginBottom: "10px"
              }}>
                {error}
              </div>
            )}

            <div className="input-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="input-field"
              />
            </div>

            <div className="input-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="john@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="input-field"
              />
            </div>

            <div className="input-group">
              <label htmlFor="password">Create Password</label>
              <input
                type="password"
                id="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="input-field"
              />
            </div>

            <button
              type="submit"
              className="btn-premium btn-premium-solid"
              style={{ marginTop: "15px", width: "100%" }}
              disabled={loading}
            >
              {loading ? "Registering..." : "Join the Gym"}
            </button>
          </form>
        )}

        <div className="auth-footer">
          Already a member? <Link to="/Login">Log In</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
