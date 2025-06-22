"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const inputClass =
    "w-full rounded-full border border-gray-300 px-4 py-2 focus:border-pink-500 focus:outline-none";

  return (
    <div className="min-h-screen flex flex-col bg-[url('/bg.svg')] bg-cover bg-center font-sans">
      {/* === Header Strip di atas Navbar === */}
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

      {/* === Main Content === */}
      <main className="flex-grow flex flex-col md:flex-row items-center justify-center px-6 py-12">
        {/* Logo + Tagline */}
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

        {/* Form */}
        <div className="bg-white bg-opacity-95 rounded-xl shadow-lg w-full max-w-md p-10">
          <h2 className="text-2xl font-medium mb-8">Sign Up</h2>

          <form action="#" method="POST" className="space-y-4">
            <div className="flex gap-2">
              <input type="text" placeholder="First name*" required className={`w-1/2 ${inputClass}`} />
              <input type="text" placeholder="Last name*" required className={`w-1/2 ${inputClass}`} />
            </div>
            <input type="text" placeholder="Username*" required className={inputClass} />
            <input type="email" placeholder="Email*" required className={inputClass} />
            <input type="tel" placeholder="Phone Number*" required className={inputClass} />

            {/* Password */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password*"
                required
                className={`${inputClass} pr-10`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-4"
              >
                {/* password icon */}
              </button>
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password*"
                required
                className={`${inputClass} pr-10`}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-4"
              >
                {/* confirm icon */}
              </button>
            </div>

            {/* Checkbox */}
            <div className="flex items-center">
              <input type="checkbox" required className="mr-2" />
              <label className="text-sm">I agree to the Privacy Policy.</label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-full py-3 mt-4"
            >
              SIGN UP
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
