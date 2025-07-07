'use client'

import { createContext, useState, useContext, useEffect } from 'react';

const ProductContext = createContext();

export function ProductProvider({ children }) {
    const [products, setProducts] = useState([]);
    const [groupedProducts, setGroupedProducts] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProduct() {
          try {
            const token = localStorage.getItem('token');
            const res = await fetch("http://localhost:8080/api/produk", {
              headers: {
                Authorization: `Bearer ${token}`,
              },
          });
            if (!res.ok) throw new Error(`gagal memuat produk`);
            const data = await res.json();
            setProducts(data);

            if (Array.isArray(data)) {
            const grouped = data.reduce((acc, item) => {
              const kategori = item.kategori?.toLowerCase() || 'other';
              if (!acc[kategori]) acc[kategori] = [];
              acc[kategori].push(item);
              return acc;
            }, {});
            setGroupedProducts  (grouped);
          }else {
            console.warn("Produk bukan array:", data);
          }
          
          } catch (error) {
            console.error(error);
            setError(error.message);
          } finally {
            setLoading(false);
          }
        }
    
        fetchProduct();
      }, []);

      return(
        <ProductContext.Provider value={{ products, error, loading }}>
            {children}
        </ProductContext.Provider>
      );
}

export function useProduct() {
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error("useProducts must be used within a ProductProvider");
    }
    return context;
}