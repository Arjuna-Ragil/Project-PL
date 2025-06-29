"use client";

import { useProduct } from "@/app/hooks/useProduct";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function FlashSaleList({type, amount}) {

  const { products } = useProduct()
  

  function formatPrice(price) {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  }

  return (
    <>
      {products.slice(0, amount).map((product) => (
        <div key={product.product_id} className="dark:text-white">
          <div className="hover:border-select hover:scale-105 relative h-full w-full rounded-2xl border-2 border-gray-600/50 dark:border-neutral-200 bg-white dark:bg-gray-500/50 p-2 duration-300 hover:border-4 hover:shadow-xl">
            <Image
              src={"/addIcon.svg"}
              alt="add"
              width={20}
              height={20}
              className="hover:bg-select dark:hover:bg-green-900 justify-self-end rounded-full p-1 transition-colors duration-300 dark:invert"
            />
            <Link href={`/products/${product.product_id}`}>
              <div className="flex flex-col gap-2 md:p-3">
                <div className="relative flex h-[90px] w-auto items-center justify-center border-b-2 pb-1 md:h-[140px]">
                  <Image
                    src={product.image_URL}
                    alt="product"
                    width={100}
                    height={100}
                    className="aspect-square h-full w-auto"
                  />
                </div>
                <div className="truncate text-xs md:text-base">
                  <p className="font-bold">{product.brand}</p>
                  <p>{product.name}</p>
                  <p className="text-background3">
                    {formatPrice(product.price)}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      ))}
      <Link href={"/products/flashsale"} className={` ${type} `}>
        <button className="hover:bg-select flex flex-col items-center justify-center rounded-2xl border-2 border-gray-400 bg-white p-3 transition-colors duration-200 hover:border-black">
          <p className="text-black">See More</p>
          <Image
            src={"/seeMoreIcon.svg"}
            alt="See More"
            width={50}
            height={50}
            className="invert"
          />
        </button>
      </Link>
    </>
  );
}
