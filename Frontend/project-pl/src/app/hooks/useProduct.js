'use client'

import { createContext, useState, useContext, useEffect } from 'react';

const ProdukContext = createContext();

export function ProductProvider({ children }) {
    const [produk, setProduk] = useState([]);
    const [groupedProduk, setGroupedProduk] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProduct() {
          try {
            const res = await fetch("http://localhost:8080/api/produk");
            if (!res.ok) throw new Error(`gagal memuat produk`);
            const data = await res.json();
            setProduk(data);

            const grouped = data.reduce((acc, item) => {
              const kategori = item.kategori?.toLowerCase() || 'other';
              if (!acc[kategori]) acc[kategori] = [];
              acc[kategori].push(item);
              return acc;
            }, {});
            setGroupedProduk(grouped);
            
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
        <ProdukContext.Provider value={{ produk, error, loading }}>
            {children}
        </ProdukContext.Provider>
      );
}

export function useProduct() {
    const context = useContext(ProdukContext);
    if (!context) {
        throw new Error("useProduk must be used within a ProductProvider");
    }
    return context;
}