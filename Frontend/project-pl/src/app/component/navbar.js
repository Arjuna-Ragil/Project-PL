"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import MiniProfile from "./miniProfile";

export default function Navbar() {
  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState("");
  const [showCart, setShowCart] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (showSearch && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showSearch]);

  return (
    <div className="w-full">
      <div className="fixed w-full bg-navbarContainer flex flex-row justify-between p-5 text-white z-40">
        <div className="flex flex-row gap-10">
          <div className="text-5xl font-bold">Logo</div>
          <div className="flex flex-row gap-5 text-2xl">
            <button className="hover:border-b-2 border-navbarSelect transition-all duration-100">
              Men
            </button>
            <button className="hover:border-b-2 border-navbarSelect transition-all duration-100">
              Women
            </button>
            <button className="hover:border-b-2 border-navbarSelect transition-all duration-100">
              Kids
            </button>
            <button className="hover:border-b-2 border-navbarSelect transition-all duration-100">
              New Arrivals
            </button>
            <button className="hover:border-b-2 border-navbarSelect transition-all duration-100">
              Sale
            </button>
          </div>
        </div>
        <div className="flex flex-row gap-14 w-1/2 justify-end">
          {showSearch ? (
            <div className="w-1/2 flex flex-row gap-3 justify-between">
              <input
                ref={inputRef}
                type="text"
                placeholder="search product"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="h-full bg-white border-2 border-black w-full text-black rounded-xl px-2 motion-preset-blur-left motion-duration-200"
              />
              <button
                onClick={() => {
                  setShowSearch(false), setSearch("");
                }}
              >
                <Image
                  src="/closeIcon.svg"
                  alt="Close"
                  width={30}
                  height={30}
                  className="invert"
                />
              </button>
            </div>
          ) : (
            <button onClick={() => setShowSearch(true)} className="">
              <Image
                src="/searchIcon.svg"
                alt="Search Icon"
                width={42}
                height={42}
              />
            </button>
          )}
          <button
            onClick={() => {
              if (showCart) {
                setShowCart(false);
              } else setShowCart(true), setShowProfile(false);
            }}
          >
            <Image src="/cartIcon.svg" alt="Cart Icon" width={42} height={42} />
          </button>
          <button
            onClick={() => {
              if (showProfile) {
                setShowProfile(false);
              } else setShowProfile(true), setShowCart(false);
            }}
          >
            <Image
              src="/profileIcon.svg"
              alt="Profile Icon"
              width={42}
              height={42}
            />
          </button>
        </div>
      </div>
      {showCart ? (
        <div
          className="fixed z-50 right-1 mt-22 bg-white shadow-xl h-1/2 w-1/3 p-3 motion-preset-slide-left"
          onMouseLeave={() => setShowCart(false)}
        ></div>
      ) : (
        <></>
      )}
      {showProfile ? (
        <div
          className="fixed z-50 right-1 mt-22 bg-white shadow-xl h-1/4 w-1/4 p-3 motion-preset-slide-left"
          onMouseLeave={() => setShowProfile(false)}
        >
          <MiniProfile />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
