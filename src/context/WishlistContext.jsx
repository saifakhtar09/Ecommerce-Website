import React, { createContext, useContext, useState, useEffect } from "react";

const WishlistContext = createContext();

// Custom hook to use wishlist context
export const useWishlist = () => {
  return useContext(WishlistContext);
};

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  // Load wishlist from localStorage when the component mounts
  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(storedWishlist);
  }, []);

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  // Function to add an item to the wishlist
  const addToWishlist = (item) => {
    if (!wishlist.find((wishItem) => wishItem.id === item.id)) {
      setWishlist([...wishlist, item]);
    }
  };

  // Function to remove an item from the wishlist
  const removeFromWishlist = (itemId) => {
    setWishlist(wishlist.filter((item) => item.id !== itemId));
  };

  // Function to move an item from the wishlist to the cart
  const moveToCart = (item, addToCart) => {
    addToCart(item); // Add item to cart
    removeFromWishlist(item.id); // Remove from wishlist
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist, moveToCart }}>
      {children}
    </WishlistContext.Provider>
  );
};
