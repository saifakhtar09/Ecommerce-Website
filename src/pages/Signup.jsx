import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../style/Login.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signup } = useAuth(); // Using the AuthContext for signup
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError(""); // Reset the error message before submission
    console.log("Form submitted"); // Debugging

    try {
      // Pass navigate to the signup function
      const success = await signup(email, password, navigate);
      
      console.log("Signup success:", success); // Debugging
      if (success) {
        console.log("Redirecting to login..."); // Debugging
        navigate("/login"); // Redirect to login after successful signup
      } else {
        console.log("Email already exists."); // Debugging
        setError("Email already exists. Try logging in.");
      }
    } catch (err) {
      console.error("Error during signup:", err);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Create an Account</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSignup}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Sign Up</button>
        </form>
        <p className="signup-link">
          Already have an account? <a href="/login">Log in</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
