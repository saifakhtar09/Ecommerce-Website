import React from "react";
import { useAuth } from "../context/AuthContext"; // Context for user authentication
import { useNavigate } from "react-router-dom"; // For navigation
import "../style/Profile.css";
import { FaShoppingBag, FaHeadset, FaHeart, FaMapMarkerAlt, FaUser, FaWallet, FaSignOutAlt } from "react-icons/fa"; // Import icons

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  // Logout function
  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="profile-sidebar">
      <div className="profile-header">
        <div className="profile-avatar">
          <img src="/assets/Profile-Male-PNG.png" alt="Profile" />
        </div>
        <div className="profile-info">
          <h4>{user ? user.name : "Saif Akhtar"}</h4>
          <p>{user ? user.phone || "No phone number" : "+91 1234567890"}</p>
        </div>
      </div>

      <ul className="profile-menu">
        <li>
          <FaShoppingBag /> Orders
        </li>
        <li>
          <FaHeadset /> Customer Support
        </li>
        <li>
          <FaHeart /> Manage Referrals
        </li>
        <li>
          <FaMapMarkerAlt /> Addresses
        </li>
        <li>
          <FaUser /> Profile
        </li>
        <li>
          <FaWallet /> Wallet
        </li>
      </ul>

      <button className="logout-btn" onClick={handleLogout}>
        <FaSignOutAlt /> Log Out
      </button>
    </div>
  );
};

export default Profile;
