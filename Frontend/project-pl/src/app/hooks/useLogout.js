"use client";

import { useRouter } from "next/navigation";

export default function useLogout() {
  const router = useRouter();

  const logout = () => {
    localStorage.removeItem("token");
    router.push("/signin");
  };

  return { logout };
}

