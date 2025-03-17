import React, { useEffect, useState } from "react";
import ItemList from "../components/ItemList"; 

const Home = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch items from the API when the component mounts
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Failed to fetch items");
        }
        const data = await response.json();
        setItems(data); // Set the fetched data to state
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  // Show loading message if data is still being fetched
  if (loading) return <p>Loading items...</p>;

  // Show error message if something went wrong
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <ItemList items={items} /> {/* Pass the fetched items to ItemList */}
    </div>
  );
};

export default Home;
