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
    <div className="min-h-screen flex flex-col bg-[url('/bg.svg')] bg-cover bg-center font-sans relative">

      {/* === Back Button === */}
      <Link href="/" className="absolute top-4 left-4 z-50">
        <Image src="/backIcon.svg" alt="Back" width={30} height={30} />
      </Link>

      {/* === Main Content === */}
      <main className="flex-grow flex flex-col md:flex-row items-center justify-center px-6 py-12">
        {/* Logo + Tagline */}
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
                {/* optional: add eye icon here */}
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
                {/* optional: add eye icon here */}
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

          {/* === Already have account? === */}
          <p className="mt-6 text-center text-sm text-gray-700">
            Already have an account?{" "}
            <Link href="/signin" className="text-pink-600 hover:underline font-semibold">
              Sign In
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
