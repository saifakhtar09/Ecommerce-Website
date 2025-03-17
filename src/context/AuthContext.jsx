import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const storedAuth = localStorage.getItem("isAuthenticated") === "true";
  const [isAuthenticated, setIsAuthenticated] = useState(storedAuth);

  const login = async (email, password, navigate) => {
    console.log("Attempting to login with:", email);

    const storedUsersRaw = localStorage.getItem("users");
    console.log("Stored users (raw):", storedUsersRaw);

    let storedUsers = [];
    try {
      // Parse the stored users from the localStorage
      const usersObject = storedUsersRaw ? JSON.parse(storedUsersRaw) : {};
      
      // Convert the object into an array
      storedUsers = Object.values(usersObject);
    } catch (err) {
      console.error("Error parsing stored users:", err);
      localStorage.removeItem("users");
      storedUsers = [];
    }

    console.log("Stored users (parsed):", storedUsers);

    // Find the user that matches the email and password
    const userExists = storedUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (userExists) {
      localStorage.setItem("isAuthenticated", "true");
      setIsAuthenticated(true);
      console.log("Login successful!");
      navigate("/"); // Redirect after successful login
      return true;
    }

    console.log("Invalid credentials.");
    return false;
  };

  const signup = async (email, password, navigate) => {
    console.log("Attempting to sign up with:", email);

    const storedUsersRaw = localStorage.getItem("users");
    console.log("Stored users (raw):", storedUsersRaw);

    let storedUsers = [];
    try {
      const usersObject = storedUsersRaw ? JSON.parse(storedUsersRaw) : {};
      storedUsers = Object.values(usersObject); // Convert the object into an array
    } catch (err) {
      console.error("Error parsing stored users:", err);
      localStorage.removeItem("users");
      storedUsers = [];
    }

    console.log("Stored users (parsed):", storedUsers);

    const userExists = storedUsers.find((user) => user.email === email);
    if (!userExists) {
      storedUsers.push({ email, password });
      const usersObject = storedUsers.reduce((acc, user) => {
        acc[user.email] = user;
        return acc;
      }, {});
      localStorage.setItem("users", JSON.stringify(usersObject));
      localStorage.setItem("isAuthenticated", "true");
      setIsAuthenticated(true);
      console.log("Signup successful!");
      navigate("/login"); // Redirect after successful signup
      return true;
    }

    console.log("Email already exists.");
    return false;
  };

  const logout = () => {
    localStorage.removeItem("isAuthenticated");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
