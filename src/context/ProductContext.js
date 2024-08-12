import React, { createContext, useContext, useState, useEffect } from 'react';
import productData from '../data/productData'; 

// Create a context object for products
const ProductContext = createContext();

// Provider component to wrap the application and provide product data
export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Set products data from JSON
    setProducts(productData);
  }, []);

  // Provide the products data to child components through context
  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
}

// Custom hook to use the ProductContext
export function useProductContext() {
  const context = useContext(ProductContext);
  
  if (context === undefined) {
    throw new Error('useProductContext must be used within a ProductProvider');
  }
  
  return context;
}