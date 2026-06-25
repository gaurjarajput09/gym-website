import { useState } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../config";
import { motion } from "framer-motion";

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
      const res = await fetch(`${API_URL}/api/auth/register`, {
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
    <div className="page-container" style={{ 
      justifyContent: "center", 
      alignItems: "center", 
      minHeight: "100vh", 
      padding: "40px 24px",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Decorative Background for Register */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "radial-gradient(circle at top left, rgba(226, 125, 96, 0.15) 0%, transparent 40%), radial-gradient(circle at bottom right, rgba(165, 123, 107, 0.15) 0%, transparent 50%)",
        zIndex: -2
      }}></div>
      
      {/* Abstract blurred shapes */}
      <div style={{
        position: "absolute",
        top: "-10%",
        right: "-5%",
        width: "400px",
        height: "400px",
        background: "rgba(226, 125, 96, 0.2)",
        filter: "blur(80px)",
        borderRadius: "50%",
        zIndex: -1
      }}></div>
      <div style={{
        position: "absolute",
        bottom: "-10%",
        left: "-5%",
        width: "500px",
        height: "500px",
        background: "rgba(165, 123, 107, 0.15)",
        filter: "blur(100px)",
        borderRadius: "50%",
        zIndex: -1
      }}></div>

      <motion.div 
        className="auth-wrapper glass-panel"
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h2 className="auth-title">Join The Hulk</h2>
        <p className="auth-subtitle">Get your free trial pass instantly</p>

        {success ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{
              background: "rgba(74, 222, 128, 0.1)",
              color: "#4ade80",
              padding: "16px",
              borderRadius: "8px",
              border: "1px solid rgba(74, 222, 128, 0.2)",
              textAlign: "center"
            }}
          >
            Registration complete! Welcome to THE HULK! 💪
          </motion.div>
        ) : (
          <form onSubmit={handleRegister} className="bmi-form">
            {error && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{
                  background: "rgba(239, 68, 68, 0.1)",
                  color: "#ef4444",
                  padding: "12px",
                  borderRadius: "8px",
                  border: "1px solid rgba(239, 68, 68, 0.2)",
                  fontSize: "14px",
                  marginBottom: "10px"
                }}
              >
                {error}
              </motion.div>
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

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="btn-premium btn-premium-solid"
              style={{ marginTop: "15px", width: "100%" }}
              disabled={loading}
            >
              {loading ? "Registering..." : "Join the Gym"}
            </motion.button>
          </form>
        )}

        <div className="auth-footer">
          Already a member? <Link to="/Login">Log In</Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;
