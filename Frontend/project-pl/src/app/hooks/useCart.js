'use client'

import { createContext, useState, useEffect, useContext } from "react";

const CartContext = createContext()

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    useEffect(() => {
      const stored = localStorage.getItem("cart");
      if (stored) setCart(JSON.parse(stored));
    }, []);

    useEffect(() => {
      localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const addToCart = async (produk) => {
        const updatedCart = [...cart];
      setCart(prev => {
        const index = prev.findIndex(item => item.idProduk === produk.id);
        if (index >= 0) {
          updatedCart[index].quantity += 1;
          return updated;
        }
        return [...prev, {idProduk: produk.id, quantity: 1}];
      });
    };

    const removeFromCart = (produk) => {
      setCart(prev => prev.filter((item) => item.idProduk !== idProduk));
    };

    const checkout = async () => {
      try {
         const res = await fetch("http://localhost:8080/api/cart", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer ${token}",
          },
          body: JSON.stringify({ items: cart }),
         });

         if (!res.ok) throw new Error("Checkout gagal");

         alert("Checkout berhasil");
         setCart([]);
         localStorage.removeItem("cart");
      }catch (error) {
        alert("Checkout gagal: " + error.message);
      }
    };

  return(
    <CartContext.Provider value={{ cart, setCart, addToCart, removeFromCart, checkout}}>
        {children}
    </CartContext.Provider>
  )
}

export function useCart() {
    return useContext(CartContext)
}