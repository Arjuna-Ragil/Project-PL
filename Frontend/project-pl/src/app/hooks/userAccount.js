'use client'

import { createContext, useContext, useEffect, useState } from "react";
import Loading from "../loading";

const AccountContext = createContext()

export function AccountProvider({ children }) {
    const [loading, setLoading] = useState(true)
    const [account, setAccount] = useState(null)

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            setLoading(false);
            return;
        }

        async function fetchData() {
          try {
            const res = await fetch("http://localhost:8080/api/user/profile", {
                headers: {
                    "Authorization": `Bearer ${token}`,
                }
            });

            if (!res.ok) {
                throw new Error("Gagal mengambil data akun");
            }

            const data = await res.json();
            setAccount(data);
            setLoading(false)
          } catch (error) {
            console.error("Gagal fetch account", error);
          } finally {
            setLoading(false);
          }
        }
    
        fetchData();
      }, []);

      return (
        <>
            {loading ? 
                <Loading/>
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