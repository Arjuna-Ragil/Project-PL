'use client'

import { createContext, useState, useEffect, useContext } from "react";

const CartContext = createContext()

export function CartProvider({ children }) {
    const [cart, setCart] = useState(null);

    async function fetchData() {
    try {
      const res = await fetch("http://localhost:8000/cart");
      const data = await res.json();
      setCart([...data]);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData()
  }, []);

  return(
    <CartContext.Provider value={{ cart, setCart }}>
        {children}
    </CartContext.Provider>
  )
}

export function useCart() {
    return useContext(CartContext)
}