'use client'

const { createContext, useState, useContext, useEffect } = require("react");

const ProdukContext = createContext()

export function ProductProvider({ children }) {
    const [produk, setProduct] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProduct() {
          try {
            const res = await fetch("http://localhost:8080/api/produk");
            if (!res.ok) throw new Error(`gagal memuat produk`);
            const data = await res.json();
            setProduct(data);
          } catch (error) {
            console.error(error);
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