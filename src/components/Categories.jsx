import React from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  FaGamepad, FaAppleAlt, FaMobileAlt, 
  FaTshirt, FaTags, FaBaby, FaLaptop, FaHeart, FaThLarge 
} from "react-icons/fa";
import "../assets/All.css";



const Categories = () => {
  const location = useLocation(); 

  // categories ONLY on the home page ("/")
  if (location.pathname !== "/") {
    return null;
  }
  
  const categories = [
    { name: "All", icon: <FaThLarge />, path: "/all" }, 
    { name: "Toys", icon: <FaGamepad />, path: "/toys" },
    { name: "Fresh", icon: <FaAppleAlt />, path: "/fresh" },
    { name: "Electronics", icon: <FaLaptop />, path: "/electronics" },
    { name: "Mobiles", icon: <FaMobileAlt />, path: "/mobiles" },
    { name: "Beauty", icon: <FaHeart />, path: "/beauty" },
    { name: "Fashion", icon: <FaTshirt />, path: "/fashion" },
    { name: "Deal Zone", icon: <FaTags />, path: "/deals" },
    { name: "Baby Store", icon: <FaBaby />, path: "/baby" },
  ];

  return (
    <div className="container-fluid bg-white shadow-sm py-2">
      <div className="d-flex justify-content-center overflow-auto">
        {categories.map((cat, index) => (
          <Link
            key={index}
            to={cat.path}
            className="text-decoration-none text-dark mx-3 d-flex flex-column align-items-center category-link"
          >
            <span className="category-icon">{cat.icon}</span>
            <span className="category-name">{cat.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;