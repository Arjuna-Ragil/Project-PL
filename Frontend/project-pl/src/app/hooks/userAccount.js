'use client'

import { createContext, useContext, useEffect, useState } from "react";

const AccountContext = createContext()

export function AccountProvider({ children }) {
    const [loading, setLoading] = useState(true)
    const [account, setAccount] = useState(null)

    useEffect(() => {
        async function fetchData() {
          try {
            const res = await fetch("http://localhost:8000/user/2");
            const data = await res.json();
            setAccount(data);
            setLoading(false)
          } catch (error) {
            console.error(error);
          }
        }
    
        fetchData();
      }, []);

      return (
        <>
            {loading ? 
                <div>Loading</div>
            :
                <AccountContext.Provider value={{ account, setAccount, loading}}>
                    {children}
                </AccountContext.Provider>
            }
        </>
      )
}

export function useAccount() {
    return useContext(AccountContext)
}