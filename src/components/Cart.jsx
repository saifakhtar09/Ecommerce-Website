import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import "../assets/All.css";




const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, setCartItems } = useCart();
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Function to clear the entire cart
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <div className="container my-4 pt-5">
      <h2 className="text-center">🛒 Your Cart</h2>

      {/* Show empty cart message if no items */}
      {cartItems.length === 0 ? (
        <div className="text-center empty-cart">
          <img
            src="/assets/pngwing.com (4).png"
            alt="Empty Cart"
            className="img-fluid mb-3"
            style={{ width: "250px" }}
          />
          <p className="text-muted">Your cart is empty. Start adding products now!</p>
          <Link to="/" className="btn btn-primary">🛍️ Continue Shopping</Link>
        </div>
      ) : (
        <div className="bg-light p-3 rounded shadow cart-container">
          {/* List cart items */}
          {cartItems.map((item) => (
            <div key={item.id} className="d-flex justify-content-between align-items-center border-bottom py-2 cart-item">
              <p className="m-0 flex-grow-1">
                <strong>{item.name}</strong> - ₹{item.price.toFixed(2)} x {item.quantity} = 
                <span className="text-success fw-bold"> ₹{(item.price * item.quantity).toFixed(2)}</span>
              </p>

              {/* Quantity and remove buttons */}
              <div className="cart-controls d-flex align-items-center">
                <button
                  className="btn btn-sm btn-outline-secondary"
                  onClick={() => updateQuantity(item.id, -1)}
                  disabled={item.quantity === 1}
                >
                  -
                </button>
                <span className="mx-2 fw-bold">{item.quantity}</span>
                <button
                  className="btn btn-sm btn-outline-secondary"
                  onClick={() => updateQuantity(item.id, 1)}
                >
                  +
                </button>
                <button
                  className="btn btn-sm btn-danger remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* Total Price */}
          <h3 className="text-end mt-3">Total: ₹{totalPrice.toFixed(2)}</h3>

          {/* Clear Cart Button */}
          <button className="btn btn-danger w-100 mt-2" onClick={clearCart}>
            ❌ Clear Cart
          </button>

          {/* Checkout Button */}
          <button className="btn btn-success w-100 mt-2">
            ✅ Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
