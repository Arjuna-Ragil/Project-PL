'use client'

import { createContext, useContext, useEffect, useState } from "react";
import Loading from "../loading";

const AccountContext = createContext()

export function AccountProvider({ children }) {
    const [loading, setLoading] = useState(true)
    const [account, setAccount] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            setLoading(false);
            return;
        }

        async function fetchData() {
          try {
            setError(null);
            const res = await fetch("http://localhost:8080/api/user/profile", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                }
            });

            if (!res.ok) {
                if (res.status === 401) {
                    // Token expired atau invalid
                    localStorage.removeItem("token");
                    throw new Error("Sesi telah berakhir, silakan login kembali");
                } else if (res.status === 404) {
                    throw new Error("Data profil tidak ditemukan");
                }
                throw new Error("Gagal mengambil data akun");
            }

            const data = await res.json();
            setAccount(data);
          } catch (error) {
            console.error("Gagal fetch account:", error);
            setError(error.message);
            setAccount(null);
          } finally {
            setLoading(false);
          }
        }
    
        fetchData();
      }, []);

      return (
        <AccountContext.Provider value={{ account, setAccount, loading, error }}>
          {loading ? (
            <Loading />
          ) : error ? (
            <div className="text-center py-4">
              <div className="text-red-500">{error}</div>
              {error.includes("login") && (
                <button 
                  onClick={() => window.location.href = '/login'}
                  className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Login
                </button>
              )}
            </div>
          ) : (
            children
          )}
        </AccountContext.Provider>
      )
}

export function useAccount() {
    return useContext(AccountContext)
}