import React, { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa"; // Import Icons
import "../assets/Nav/Navbar.css"; // Import CSS

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "enabled"
  );

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
    localStorage.setItem("darkMode", darkMode ? "enabled" : "disabled");
  }, [darkMode]);

  return (
    <button 
      onClick={() => setDarkMode(!darkMode)} 
      className="dark-mode-toggle"
    >
      {darkMode ? (
    
        <FaSun className="sun-icon" size={20} /> 
      ) : (
        <FaMoon className="moon-icon" size={20} />
      )}
    </button>
  );
};

export default DarkModeToggle;
