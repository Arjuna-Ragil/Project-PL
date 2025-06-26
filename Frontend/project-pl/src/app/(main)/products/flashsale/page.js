"use client";

import Footer from "@/app/(main)/component/footer";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import FlashSaleList from "../../component/flashSaleList";

export default function FlashSalePage() {
  const [products, setProducts] = useState([]);

  function formatPrice(price) {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  }

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch("http://localhost:8000/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchProduct();
  }, []);

  return (
    <div className="flex h-full w-full flex-col">
      <div className="bg-[url('/flashHero.svg')] bg-contain bg-no-repeat bg-center lg:h-130 md:h-80 sm:h-50 h-35 2xl:w-[1440px] w-full mx-auto bg-white/70 backdrop-blur-3xl md:mt-22 sm:mt-22 mt-17 "></div>
      <div className="flex h-full w-full flex-row items-center justify-between bg-white dark:bg-gray-500/50 p-5">
        <Link href="/">
          <Image src={"/backIcon.svg"} alt="back" height={50} width={50} className="dark:invert"/>
        </Link>
        <p>time</p>
      </div>
      <div className="grid h-full w-full lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-5 bg-white/50 dark:bg-black/50 p-5">
        <FlashSaleList type={"hidden"} amount={24} />
      </div>
      <Footer />
    </div>
  );
}
