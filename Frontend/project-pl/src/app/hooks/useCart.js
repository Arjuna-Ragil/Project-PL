'use client'

import { createContext, useState, useEffect, useContext } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  // Ambil cart dari backend
  const fetchCart = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch("http://localhost:8080/api/cart", {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      });
      if (!res.ok) throw new Error("Gagal ambil cart");

      const data = await res.json();
      setCart(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  // Tambahkan produk ke cart
  const addToCart = async (produkId, quantity = 1) => {
    try {
      const token = localStorage.getItem("token");

      const res = await fetch("http://localhost:8080/api/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ product_id: produkId, quantity }),
      });

      if (!res.ok) throw new Error("Gagal tambah produk");

      await fetchCart(); // Refresh cart setelah ditambah
    } catch (err) {
      console.error("Gagal tambah ke cart:", err);
    }
  };

  // Hapus item (optional: butuh endpoint delete di backend)
  const removeFromCart = async (produkId) => {
    setCart(prev => prev.filter((item) => item.produkId !== produkId));
    // Tambahkan request DELETE ke backend jika endpoint ada
  };

  // Checkout
  const checkout = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await fetch("http://localhost:8080/api/cart/checkout", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) throw new Error("Checkout gagal");

      alert("Checkout berhasil!");
      setCart([]);
    } catch (error) {
      alert("Checkout gagal: " + error.message);
    }
  };

  return (
    <CartContext.Provider value={{ cart, setCart, loading, addToCart, removeFromCart, checkout, fetchCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
