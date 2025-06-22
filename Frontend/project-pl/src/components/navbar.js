"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import MiniProfile from "./miniProfile";
import CartItems from "./cart";
import Link from "next/link";
import NavbarCategory from "./navbarcategory";

export default function Navbar() {
  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState("");
  const [showCart, setShowCart] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [hideCategory, setHideCategory] = useState(false);
  const [showFullCategory, setShowFullCategory] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (showSearch && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showSearch]);

  return (
    <div className="fixed z-50 w-full">
      <div className="h-3 w-full bg-white/50 backdrop-blur-2xl"></div>
      <div className="z-40 flex h-fit w-full flex-row justify-between bg-white/90 p-2 text-black">
        <div className="flex flex-row gap-5">
          <div className="sm:h-15 sm:w-30 h-10 w-20">
            <Link href={"/"} className="h-full">
              <Image
                src={"/logo.svg"}
                alt="logo"
                height={60}
                width={120}
                className=""
              />
            </Link>
          </div>
          <div className="flex flex-row items-center justify-center text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl">
            <button
              className={`border-select flex flex-row items-center justify-center gap-1 truncate p-1 transition-all duration-100 hover:border-b-2 md:hidden ${hideCategory ? "max-lg:hidden" : ""}`}
              onClick={() => {
                if (showFullCategory) {
                  setShowFullCategory(false);
                } else setShowFullCategory(true), setHideCategory(false), setShowCart(false), setShowProfile(false);
              }}
            >
              CATEGORY
              <div className="relative aspect-square h-5 w-5">
                <Image
                  src={"/expandIcon.svg"}
                  alt="expand"
                  fill
                  className={`${showFullCategory ? "sm:rotate-180 -rotate-90" : "sm:rotate-0 rotate-90"} transform transition-transform duration-200`}
                />
              </div>
            </button>
            <NavbarCategory hideCategory={hideCategory} showFullCategory={showFullCategory} type={"max-sm:hidden"}/>
          </div>
        </div>
        <div
          className={`w-1/2 flex-row items-center justify-end gap-3 sm:gap-7 max-lg:w-full lg:gap-10 xl:mr-10 xl:gap-14 ${showFullCategory ? "max-md:hidden" : "flex"} motion-preset-blur-left-lg motion-duration-150`}
        >
          {showSearch ? (
            <div className="flex sm:w-1/2 w-full flex-row justify-between gap-3">
              <input
                ref={inputRef}
                type="text"
                placeholder="search product"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="motion-preset-blur-left motion-duration-200 focus:border-select h-full w-full rounded-xl border-2 border-black bg-white sm:p-3 p-2 px-2 text-black focus:outline-0"
              />
              <button
                onClick={() => {
                  setShowSearch(false), setSearch(""), setHideCategory(false);
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
            <button
              onClick={() => {
                setShowSearch(true), setHideCategory(true);
              }}
              className="aspect-square size-fit max-sm:size-5"
            >
              <Image
                src="/searchIcon.svg"
                alt="Search Icon"
                width={37}
                height={37}
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
            className="aspect-square max-sm:size-5"
          >
            <Image
              src="/cartIcon.svg"
              alt="Cart Icon"
              width={35}
              height={35}
              className="invert"
            />
          </button>
          <button
            onClick={() => {
              if (showProfile) {
                setShowProfile(false);
              } else setShowProfile(true), setShowCart(false);
            }}
            className="aspect-square size-fit max-sm:size-5"
          >
            <Image
              src="/profileIcon.svg"
              alt="Profile Icon"
              width={35}
              height={35}
              className="invert"
            />
          </button>
        </div>
      </div>
      {showFullCategory ? (
        <div className="motion-preset-slide-right fixed left-2 z-50 mt-3 flex w-50 flex-col border-2 border-black bg-white p-3 shadow-xl sm:hidden">
          <NavbarCategory hideCategory={hideCategory} showFullCategory={showFullCategory} type={"sm:hidden"}/>
        </div>
      ) : (
        <></>
      )}
      {showCart ? (
        <div className="motion-preset-slide-left fixed right-2 z-50 h-2/3 mt-3 flex sm:w-80 w-60 flex-col border-2 border-black bg-white p-3 shadow-xl">
          <CartItems setShowCart={setShowCart} />
        </div>
      ) : (
        <></>
      )}
      {showProfile ? (
        <div
          className="motion-preset-slide-left fixed right-2 z-50 mt-3 h-60 sm:w-80 w-65 rounded-lg bg-white p-3 shadow-xl"
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