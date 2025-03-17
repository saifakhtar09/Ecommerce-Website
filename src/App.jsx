import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import WishList from "./components/WishList"; 
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";
import { SearchProvider } from "./context/SearchContext"; 
import Header from "./components/Header"; 
import About from "./pages/About"; 
import Footer from "./components/Footer";
import Login from "./pages/Login"; 
import Signup from "./pages/Signup"; 
import Profile from "./pages/Profile"; 
import Categories from "./components/Categories"; 
import { AuthProvider, useAuth } from "./context/AuthContext";
import Home from "./pages/Home";

// Private Route Component
const PrivateRoute = ({ element }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? element : <Navigate to="/login" />;
};

const AppContent = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login" || location.pathname === "/signup";
  const isHomePage = location.pathname === "/";

  return (
    <>
     
      {!isLoginPage && <Navbar />}
      {!isLoginPage && isHomePage && <Categories />}
      {!isLoginPage && isHomePage && <Header />}

      <main className="main-content">
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          
          {/* Private Routes */}
          <Route path="/" element={<PrivateRoute element={<Home />} />} /> {/* Use Home instead of ItemList */}
          <Route path="/cart" element={<PrivateRoute element={<Cart />} />} />
          <Route path="/wishlist" element={<PrivateRoute element={<WishList />} />} />
          <Route path="/about" element={<PrivateRoute element={<About />} />} />
          <Route path="/profile" element={<PrivateRoute element={<Profile />} />} />
        </Routes>
      </main>

      {/* Show Footer only if we're not on login/signup page */}
      {!isLoginPage && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <AuthProvider> 
      <CartProvider>
        <WishlistProvider>
          <SearchProvider>
            <Router>
              <AppContent />
            </Router>
          </SearchProvider>
        </WishlistProvider>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;
