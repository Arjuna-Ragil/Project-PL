'use client'

import { createContext, useState, useEffect, useContext } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Ambil cart dari backend
  const fetchCart = async () => {
    setLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setCart([]);
        setLoading(false);
        return;
      }
      
      const res = await fetch("http://localhost:8080/api/cart", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        credentials: "include"
      });

      if (!res.ok) {
        if (res.status === 401) {
          // Token expired
          localStorage.removeItem("token");
          setCart([]);
          setError("Sesi telah berakhir, silakan login kembali");
          return;
        }
        throw new Error("Gagal mengambil data keranjang");
      }

      const data = await res.json();
      setCart(data || []);
    } catch (err) {
      console.error("Error fetching cart:", err);
      setError(err.message);
      setCart([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  // Tambahkan produk ke cart
  const addToCart = async (produkId, quantity = 1) => {
    setLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("Silakan login terlebih dahulu");
        return;
      }

      const res = await fetch("http://localhost:8080/api/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        credentials: "include",
        body: JSON.stringify({ product_id: produkId, quantity }),
      });

      if (!res.ok) {
        if (res.status === 401) {
          localStorage.removeItem("token");
          setError("Sesi telah berakhir, silakan login kembali");
          return;
        }
        throw new Error("Gagal menambahkan produk ke keranjang");
      }

      await fetchCart(); // Refresh cart setelah ditambah
    } catch (err) {
      console.error("Error adding to cart:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Hapus item dari cart
  const removeFromCart = async (produkId) => {
    setLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("Silakan login terlebih dahulu");
        return;
      }

      const res = await fetch(`http://localhost:8080/api/cart/${produkId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        credentials: "include"
      });

      if (!res.ok) {
        if (res.status === 401) {
          localStorage.removeItem("token");
          setError("Sesi telah berakhir, silakan login kembali");
          return;
        }
        throw new Error("Gagal menghapus produk dari keranjang");
      }

      await fetchCart(); // Refresh cart setelah hapus
    } catch (err) {
      console.error("Error removing from cart:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Checkout
  const checkout = async () => {
    setLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("Silakan login terlebih dahulu");
        return;
      }

      const res = await fetch("http://localhost:8080/api/cart/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        credentials: "include"
      });

      if (!res.ok) {
        if (res.status === 401) {
          localStorage.removeItem("token");
          setError("Sesi telah berakhir, silakan login kembali");
          return;
        }
        throw new Error("Proses checkout gagal");
      }

      setCart([]); // Clear cart after successful checkout
      return true; // Return success status
    } catch (err) {
      console.error("Error during checkout:", err);
      setError(err.message);
      return false;
    } finally {
      setLoading(false);
    }
  };

  return (
    <CartContext.Provider value={{ 
      cart, 
      setCart, 
      loading, 
      error,
      addToCart, 
      removeFromCart, 
      checkout, 
      fetchCart 
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
