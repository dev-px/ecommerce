"use client";

import { useContext, createContext, useState } from "react";

const cartContext = createContext();

export const useCart = () => useContext(cartContext);

export const CartContextProvider = ({ children }) => {
  const [product, setProduct] = useState([]);
  const [addToCart, setAddToCart] = useState([]);
  const [quantity, setQuantity] = useState({});
  
  return (
    <cartContext.Provider value={{ product, setProduct, addToCart, setAddToCart, quantity, setQuantity }}>
      {children}
    </cartContext.Provider>
  );
};
