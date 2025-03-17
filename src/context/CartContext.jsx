import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [priceFilter, setPriceFilter] = useState([0, 50000]);

  // Add item to cart 
  const addToCart = (item) => {
    console.log(item, 19);
    
    // Store original price
    const originalPrice = item.price;
    console.log(originalPrice);
    
    const existingItem = cartItems.find((i) => i.id === item.id);

    if (existingItem) {
      setCartItems((prev) =>
        prev.map((i) =>
          i.id === item.id
            ? { ...i, quantity: i.quantity + 1, price: originalPrice }
            : i
        )
      );
    } else {
      setCartItems((prev) => [...prev, { ...item, quantity: 1, price: originalPrice }]);
    }
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, amount) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
      )
    );
  };

  const applyPriceFilter = (min, max) => {
    setPriceFilter([min, max]);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQuantity, priceFilter, applyPriceFilter }}
    >
      {children}
    </CartContext.Provider>
  );
};
