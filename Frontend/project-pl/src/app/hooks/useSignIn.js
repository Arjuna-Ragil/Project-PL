"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function useSignIn() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setErrorMsg] = useState(null);

  const login = async (email, password) => {
    setLoading(true);
    setErrorMsg(null);

    try {
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }), // ⬅️ Pastikan sesuai backend
      });

      const data = await response.json(); // ⬅️ Ambil response-nya

      if (!response.ok) {
        throw new Error(data.message || "Login gagal.");
      }

      // ✅ Simpan token ke localStorage
      localStorage.setItem("token", data.token);

      // ✅ Arahkan ke homepage
      router.push("/products");

    } catch (error) {
      setErrorMsg(error.message || "Terjadi kesalahan saat login.");
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
}
