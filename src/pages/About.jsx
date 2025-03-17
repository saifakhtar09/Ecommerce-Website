import React from "react";
import "../assets/All.css";

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; // For social media icons

const About = () => {
  return (
    <div className="container about-container mt-5">
      <h2>About Us</h2>
      <p>
        Welcome to <span className="brand-name">Trendora</span>! We are dedicated to providing you with the finest products at unbeatable prices. Our goal is to bring quality and affordability together, ensuring a seamless shopping experience.
      </p>

      <div className="mission-section">
        <h3>Our Mission</h3>
        <p>
          Our mission is to make shopping fun, easy, and accessible for everyone. We strive to offer high-quality products that meet your needs while ensuring great value for money.
        </p>
      </div>


      <div className="contact-section">
        <h3>Contact Us</h3>
        <p>Email: support@Trendora.com</p>
        <p>Phone: +123 456 7890</p>
      </div>

      <div className="social-media-section">
        <h3>Follow Us</h3>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="social-icon" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="social-icon" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social-icon" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="social-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
