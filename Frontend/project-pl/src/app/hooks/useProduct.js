'use client'

const { createContext, useState, useContext, useEffect } = require("react");

const ProductContext = createContext()

export function ProductProvider({ children }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchProduct() {
          try {
            const res = await fetch("http://localhost:8000/products");
            const data = await res.json();
            setProducts(data);
          } catch (error) {
            console.error(error);
          }
        }
    
        fetchProduct();
      }, []);

      return(
        <ProductContext.Provider value={{ products }}>
            {children}
        </ProductContext.Provider>
      )
}

export function useProduct() {
    return useContext(ProductContext)
}