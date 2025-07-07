"use client";

import { useEffect, useState } from "react";

export default function Appearance({ show }) {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme === "dark";
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const handleToggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className={`flex flex-col gap-10 ${show ? " " : "hidden"}`}>
      <h2>Appearance</h2>
      <div className="flex w-full items-center justify-between rounded-lg border border-gray-300 bg-white p-4 shadow-sm dark:border-gray-600 dark:bg-gray-800">
        <div>
          <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
            Theme Mode
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Switch between light and dark mode
          </p>
        </div>

        <label className="relative inline-flex cursor-pointer items-center">
          <input
            type="checkbox"
            className="peer sr-only"
            checked={isDarkMode}
            onChange={handleToggleTheme}
          />
          <div className="h-6 w-11 rounded-full bg-gray-300 transition-all duration-300 peer-checked:bg-blue-600 dark:bg-gray-600"></div>
          <div className="absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white transition-transform peer-checked:translate-x-full"></div>
        </label>
      </div>
    </div>
  );
}
