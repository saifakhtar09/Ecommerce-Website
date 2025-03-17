import { useState } from "react";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";  // Assuming you have a CartContext
import { useNavigate } from "react-router-dom";
import "../assets/All.css";

const WishList = () => {
  const { wishlist, removeFromWishlist } = useWishlist();  // Assuming removeFromWishlist is in WishlistContext
  const { addToCart } = useCart();  // Assuming addToCart is in CartContext
  const [isZooming, setIsZooming] = useState(false);
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    setIsZooming(true);
    setTimeout(() => {
      navigate("/"); // Navigate after animation
    }, 700);
  };

  const handleMoveToCart = (item) => {
    addToCart(item);  // Add item to cart
    removeFromWishlist(item.id);  // Remove item from wishlist
  };

  const handleRemoveFromWishlist = (itemId) => {
    removeFromWishlist(itemId);  // Remove item from wishlist
  };

  return (
    <div className="wishlist-container">
      <h2 className="wishlist-title">❤️ My Wishlist</h2>

      {wishlist.length === 0 ? (
        <div className="text-center empty-wishlist">
          <img
            src="/assets/pngwing.com (7).png"
            alt="Empty Wishlist"
            className="img-fluid mb-3"
            style={{ width: "250px" }}
          />
          <p className="text-muted">Your wishlist is empty. Start adding products now!</p>
          <button 
            className={`btn btn-primary continue-btn ${isZooming ? "bounce-zoom" : ""}`} 
            onClick={handleContinueShopping}
          >
            🛍️ Continue Shopping
          </button>
        </div>
      ) : (
        <div className="wishlist-grid">
          {wishlist.map((item) => (
            <div key={item.id} className="wishlist-card">
              <img src={item.image} alt={item.name} className="wishlist-image" />
              <h3>{item.name}</h3>
              <p className="price">₹{(item.price - (item.price * item.discount) / 100).toFixed(2)}</p>
              <div className="wishlist-actions">
                <button
                  className="btn btn-secondary"
                  onClick={() => handleMoveToCart(item)}
                >
                  Move to Cart
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleRemoveFromWishlist(item.id)}
                >
                  Remove from Wishlist
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishList;
