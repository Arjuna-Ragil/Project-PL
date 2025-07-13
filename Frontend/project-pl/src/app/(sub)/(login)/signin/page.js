"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import useSignIn from "@/app/hooks/useSignIn";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const router = useRouter();
  const handleLogin = (e) => {
  e.preventDefault(); // Hindari reload
  login(email, password);
};


  const { login, loading, error } = useSignIn();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  const handleSignIn = (e) => {
    e.preventDefault(); // Mencegah reload halaman
    login(email, password);
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-[url('/bg.svg')] bg-cover bg-center font-sans">

      {/* === Back Button === */}
      <Link href="/" className="absolute top-4 left-4 z-50">
        <Image src="/backIcon.svg" alt="Back" width={30} height={30} />
      </Link>

      {/* === Main === */}
      <main className="flex-grow flex flex-col md:flex-row items-center justify-center px-6 py-12">
        {/* Left Logo Section */}
        <div className="md:w-1/2 mb-12 md:mb-0 flex flex-col items-start text-left pl-12">
            <Image
              src="/logo.svg"
              alt="Eclara"
              width={400}
              height={140}
              className="mb-2 cursor-pointer"
            />
          <p className="text-pink-700 font-semibold text-2xl mt-6">
            Beauty Doesn’t Have to Be Expensive.
          </p>
        </div>

        {/* Right: Login Card */}
        <div className="bg-white bg-opacity-95 rounded-xl shadow-lg w-full max-w-md p-10">
          <h2 className="text-2xl font-medium mb-8">Sign In</h2>

          <div className="space-y-6">
            <input
              type="text"
              name="identifier"
              placeholder="Email*"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
              required
            />

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Password*"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-full border border-gray-300 px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-pink-300"
                required
              />
              <button
                type="button"
                aria-label="Toggle password visibility"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 flex items-center pr-4 focus:outline-none"
              >
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a10.06 10.06 0 012.307-3.665m3.62-2.381A9.956 9.956 0 0112 5c4.478 0 8.268 2.943 9.542 7a9.965 9.965 0 01-4.107 5.126M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3l18 18" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )}
              </button>
            </div>

            <button
              onClick={handleSignIn}
              className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-full py-3"
            >
              SIGN IN
            </button>
          </div>

          <p className="text-center text-sm mt-6">
            Don’t have an account?{" "}
            <Link href="/signup" className="text-pink-600 font-medium hover:underline">Sign up</Link>
          </p>
        </div>
      </main>
    </div>
  );
}
