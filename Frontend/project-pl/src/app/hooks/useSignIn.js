"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function useSignIn() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  const login = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error("Email atau password salah");
      }

      const data = await res.json(); // pastikan backend kirim token di body
      localStorage.setItem("token", data.token); // simpan token

      router.push("/"); // redirect ke homepage atau dashboard
    } catch (err) {
      console.error("Login error:", err);
      setError(err.message || "Gagal login");
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
}
