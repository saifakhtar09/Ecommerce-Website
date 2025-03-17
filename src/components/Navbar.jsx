import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Form, FormControl } from "react-bootstrap";
import { FaSearch, FaHeart, FaUserCircle, FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { useSearch } from "../context/SearchContext";
import { useAuth } from "../context/AuthContext"; 
import DarkModeToggle from "./DarkModeToggle"; // Import the Dark Mode Toggle component
import "../assets/Nav/Navbar.css";

const CustomNavbar = () => {
  const { searchQuery, setSearchQuery } = useSearch();
  const { cartItems } = useCart();
  const { wishlist } = useWishlist();
  const { isAuthenticated } = useAuth(); 

  const cartItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const wishlistItemCount = wishlist.length;

  return (
    <Navbar expand="lg" className="custom-navbar fixed-top shadow bg-primary">
      <Container>
        {/* Brand Logo */}
        <Navbar.Brand as={Link} to="/" className="text-white fw-bold">
          🛍️ Trendora
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="navbar-nav" />
        
        <Navbar.Collapse id="navbar-nav">
          {/* Search Box */}
          <Form className="d-flex mx-auto search-box">
            <FormControl
              type="text"
              placeholder="Search For Products..."
              className="me-2 search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <FaSearch className="search-icon" />
          </Form>

          {/* Navigation Links */}
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} to="/" className="nav-item text-white">Home</Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-item text-white">About</Nav.Link>
            
            {/* Wishlist */}
            <Nav.Link as={Link} to="/wishlist" className="nav-item text-white">
              <FaHeart className="me-1" /> Wishlist
              {wishlistItemCount > 0 && (
                <span className="badge bg-warning text-dark ms-1">{wishlistItemCount}</span>
              )}
            </Nav.Link>
            
            {/* Profile/Login */}
            {isAuthenticated ? (
              <Nav.Link as={Link} to="/profile" className="nav-item text-white">
                <FaUserCircle className="me-1" /> Profile
              </Nav.Link>
            ) : (
              <Nav.Link as={Link} to="/login" className="nav-item text-white">
                <FaUserCircle className="me-1" /> Login
              </Nav.Link>
            )}

            {/* Cart */}
            <Nav.Link as={Link} to="/cart" className="nav-item text-white">
              <FaShoppingCart className="me-1" /> Cart
              {cartItemCount > 0 && (
                <span className="badge bg-warning text-dark ms-1">{cartItemCount}</span>
              )}
            </Nav.Link>

            {/* Dark Mode Toggle */}
            <Nav.Item className="ms-3">
              <DarkModeToggle />
            </Nav.Item>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
