import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/Header/Header.css";

const Header = () => {
  const images = [
    "/assets/954_generated.jpg",
    "/assets/38648606.jpg",
    "/assets/240_F_634409179_dY33pQYKGG1glMt7IOE47kzDf7nj1iCe.jpg",
    "/assets/ecommerce_website_banner_template_customers_sketch_flat_design_6920122.webp",
    
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000); // Change every 1 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="header-container">
      <div className="slider">
        <img
          src={images[currentImageIndex]}
          alt="Slider"
          className="slider-image"
        />
      </div>
      <div className="overlay">
        <h1>Discover Amazing Deals!</h1>
        <p>Your one-stop destination for electronics, fashion, groceries, and more!</p>
        <Link to="/cart" className="shop-now-btn">Shop Now</Link>
      </div>
    </div>
  );
};

export default Header;
