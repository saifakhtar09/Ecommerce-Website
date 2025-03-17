import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../assets/Foot/Footer.css";




const Footer = () => {
  const location = useLocation();
  
  //  footer only on the home page
  if (location.pathname !== "/") {
    return null;
  }

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section logo">
          <h2 className="brand">Trendora</h2>
          <div className="social-icons">
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </div>
          <p>© Augurs Technologies Private Limited</p>
        </div>

        <div className="footer-section links">
          <Link to="/">Home</Link>
          <Link to="/delivery-areas">Delivery Areas</Link>
          <Link to="/careers">Careers</Link>
          <Link to="/customer-support">Customer Support</Link>
          <Link to="/press">Press</Link>
        </div>

        <div className="footer-section policies">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-of-use">Terms of Use</Link>
          <Link to="/responsible-disclosure">Responsible Disclosure Policy</Link>
          <Link to="/blog">Mojo - a Trendora Blog</Link>
        </div>

        <div className="footer-section download">
          <h4>Download App</h4>
          <a href="#" className="app-button google-play">
            <img src="/assets/pngegg (6).png" alt="Get it on Play Store" />
          </a>
          <a href="#" className="app-button app-store">
            <img src="/assets/pngwing.com (5).png" alt="Get it on App Store" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
