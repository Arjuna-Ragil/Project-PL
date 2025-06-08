"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import MiniProfile from "./miniProfile";
import CartItems from "./cart";
import Link from "next/link";

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
    <div className="fixed z-50 w-full">
      <div className="h-3 w-full bg-white/50 backdrop-blur-2xl"></div>
      <div className="z-40 flex w-full flex-row justify-between bg-white p-5 text-black">
        <div className="flex flex-row gap-10">
          <Link href={"/"}>
            <Image src={"/logo.svg"} alt="logo" height={120} width={120} />
          </Link>
          <div className="flex flex-row gap-5 text-2xl">
            <button className="border-select transition-all duration-100 hover:border-b-2">
              SKINCARE
            </button>
            <button className="border-select transition-all duration-100 hover:border-b-2">
              BODYCARE
            </button>
            <button className="border-select transition-all duration-100 hover:border-b-2">
              HAIRCARE
            </button>
            <button className="border-select transition-all duration-100 hover:border-b-2">
              MAKEUP
            </button>
          </div>
        </div>
        <div className="mr-10 flex w-1/2 flex-row justify-end gap-14">
          {showSearch ? (
            <div className="flex w-1/2 flex-row justify-between gap-3">
              <input
                ref={inputRef}
                type="text"
                placeholder="search product"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="motion-preset-blur-left motion-duration-200 focus:border-select h-full w-full rounded-xl border-2 border-black bg-white px-2 text-black focus:outline-0"
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
                className="invert"
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
            <Image
              src="/cartIcon.svg"
              alt="Cart Icon"
              width={42}
              height={42}
              className="invert"
            />
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
              className="invert"
            />
          </button>
        </div>
      </div>
      {showCart ? (
        <div className="motion-preset-slide-left fixed right-2 z-50 mt-3 flex h-2/3 w-80 flex-col border-2 border-black bg-white p-3 shadow-xl">
          <CartItems setShowCart={setShowCart} />
        </div>
      ) : (
        <></>
      )}
      {showProfile ? (
        <div
          className="motion-preset-slide-left fixed right-2 z-50 mt-3 h-60 w-80 rounded-lg bg-white p-3 shadow-xl"
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
