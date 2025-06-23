"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[url('/bg.svg')] bg-cover bg-center font-sans">
      {/* === Header Strip === */}
      <div className="w-full">
        <Image
          src="/Rectangle 103.svg"
          alt="Top Header Strip"
          width={1920}
          height={10}
          className="w-full h-auto"
        />
      </div>

      {/* === Navbar === */}
      <header className="sticky top-0 z-50 bg-white bg-opacity-70 backdrop-blur-sm shadow">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-6">
            <Link href="/homePage">
              <Image
                src="/logo.svg"
                alt="Eclara logo"
                width={120}
                height={60}
                className="h-16 w-auto cursor-pointer"
              />
            </Link>
            <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-800">
              <a href="#" className="hover:text-pink-500">SKINCARE</a>
              <a href="#" className="hover:text-pink-500">BODYCARE</a>
              <a href="#" className="hover:text-pink-500">HAIRCARE</a>
              <a href="#" className="hover:text-pink-500">MAKEUP</a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Image src="/search.svg" alt="search" width={20} height={20} className="w-5 h-5 cursor-pointer" />
            <Image src="/cart.svg" alt="cart" width={20} height={20} className="w-5 h-5 cursor-pointer" />
            <Image src="/profile.svg" alt="profile" width={20} height={20} className="w-5 h-5 cursor-pointer" />
          </div>
        </div>
      </header>

      {/* === Main === */}
      <main className="flex-grow flex flex-col md:flex-row items-center justify-center px-6 py-12">
        {/* Left Logo Section */}
        <div className="md:w-1/2 mb-12 md:mb-0 flex flex-col items-start text-left pl-12">
          <Link href="/homePage">
            <Image
              src="/logo.svg"
              alt="Eclara"
              width={400}
              height={140}
              className="mb-2 cursor-pointer"
            />
          </Link>
          <p className="text-pink-700 font-semibold text-2xl mt-6">
            Beauty Doesn’t Have to Be Expensive.
          </p>
        </div>

        {/* Right: Login Card */}
        <div className="bg-white bg-opacity-95 rounded-xl shadow-lg w-full max-w-md p-10">
          <h2 className="text-2xl font-medium mb-8">Sign In</h2>

          <form action="#" method="POST" className="space-y-6">
            <input
              type="text"
              name="identifier"
              placeholder="Email or Phone Number*"
              className="w-full rounded-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
              required
            />

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Password*"
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

            <div className="flex justify-end">
              <a href="#" className="text-sm text-gray-700 hover:underline">Forgot password?</a>
            </div>

            <button
              type="submit"
              className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-full py-3"
            >
              SIGN IN
            </button>
          </form>

          <p className="text-center text-sm mt-6">
            Don’t have an account?{" "}
            <a href="/signup" className="text-pink-600 font-medium hover:underline">Sign up</a>
          </p>
        </div>
      </main>
    </div>
  );
}
