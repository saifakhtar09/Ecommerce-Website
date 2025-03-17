import React from "react";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { useSearch } from "../context/SearchContext";
import { useNavigate } from "react-router-dom";
import "../assets/item/itemlist.css";



const ItemList = ({ items = [] }) => {  // Default to an empty array if items is undefined
  const { cartItems, addToCart } = useCart();
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const { searchQuery } = useSearch();
  const navigate = useNavigate();

  // Make sure `items` is an array before attempting to filter
  const filteredItems = (Array.isArray(items) ? items : []).filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container">
      <h2 className="logo">🛍️ Available Items</h2>
      <div className="item-grid">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => {
            const inCart = cartItems.some((cartItem) => cartItem.id === item.id);
            const inWishlist = wishlist.some((wishItem) => wishItem.id === item.id);
            
            return (
              <div className="item-card" key={item.id}>
                <img src={item.image} alt={item.title} className="item-image" />
                <h2>{item.title}</h2>
                <div>
                  <span className="price">₹{item.price.toFixed(2)}</span>
                </div>

                {inCart ? (
                  <button className="btn btn-primary w-100 mt-2" onClick={() => navigate("/cart")}>
                    Go to Cart
                  </button>
                ) : (
                  <button className="btn btn-success w-100 mt-2" onClick={() => addToCart(item)}>
                    Add to Cart
                  </button>
                )}

                {inWishlist ? (
                  <button className="btn btn-warning w-100 mt-2" onClick={() => removeFromWishlist(item.id)}>
                    Remove from Wishlist
                  </button>
                ) : (
                  <button className="btn btn-outline-danger w-100 mt-2" onClick={() => addToWishlist(item)}>
                    Add to Wishlist ❤️
                  </button>
                )}
              </div>
            );
          })
        ) : (
          <p>No items found for your search.</p>
        )}
      </div>
    </div>
  );
};

export default ItemList;
