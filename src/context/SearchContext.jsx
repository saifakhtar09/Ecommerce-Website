import { createContext, useState, useContext } from "react";

// Create the Search Context
const SearchContext = createContext();

// Custom hook for easy access
export const useSearch = () => useContext(SearchContext);

// Context Provider Component
export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </SearchContext.Provider>
  );
};
