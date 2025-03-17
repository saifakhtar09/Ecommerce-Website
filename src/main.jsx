import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App.jsx";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext"; // Import WishlistProvider

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <WishlistProvider> {/* Wrap App with WishlistProvider */}
        <App />
      </WishlistProvider>
    </CartProvider>
  </React.StrictMode>
);
