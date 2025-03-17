import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../style/Login.css";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth(); // Using the AuthContext for login
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Reset error before each submission
    console.log("Form submitted"); // Debugging

    try {
      // Pass navigate to the login function to handle redirection after success
      const success = await login(email, password, navigate);

      console.log("Login success:", success); // Debugging
      if (success) {
        console.log("Redirecting to home..."); // Debugging
        navigate("/"); // Redirect to home page after successful login
      } else {
        console.log("Invalid credentials"); // Debugging
        setError("Invalid email or password");
      }
    } catch (err) {
      // Unexpected errors, e.g., network failures
      console.error("Error during login:", err);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
        <p className="signup-link">
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
