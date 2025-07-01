'use client'

const { createContext, useState, useContext, useEffect } = require("react");

const ProdukContext = createContext()

export function ProductProvider({ children }) {
    const [produk, setProduk] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProduk() {
          try {
            const res = await fetch("http://localhost:8080/api/produk");
            if (!res.ok) throw new Error(`gagal memuat produk`);
            const data = await res.json();
            setProduk(data);
          } catch (error) {
            console.error(error);
          } finally {
            setLoading(false);
          }
        }
    
        fetchProduk();
      }, []);

      return(
        <ProdukContext.Provider value={{ produk, error, loading }}>
            {children}
        </ProdukContext.Provider>
      );
}

export function useProduk() {
    const context = useContext(ProdukContext);
    if (!context) {
        throw new Error("useProduk must be used within a ProductProvider");
    }
    return context;
}