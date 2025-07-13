"use client";

import ShortPopup from "@/app/component/shortPopup";
import { useCart } from "@/app/hooks/useCart";
import { useProduct } from "@/app/hooks/useProduct";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ProductShortList({ products = [] }) {
  const { cart, setCart } = useCart()
  const [showNotif, setShowNotif] = useState(false)

  function formatPrice(price) {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  }

  async function addToCart(productId) {
    try {
      const product = products.find((product) => product.id === productId);
      if (!product) {
        return console.warn("Product not found");
      }

      const existingItem = cart.find((item) => item.id === productId);
      
      let newCart;
      if (existingItem) {
        newCart = cart.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        newCart = [...cart, { ...product, quantity: 1 }];
      }

      setCart(newCart);
      setShowNotif(true);
      setTimeout(() => setShowNotif(false), 2000);

      setShowNotif(true)

      const res = await fetch("http://localhost:8080/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ product_id: productId })
      })
    } catch (error) {
      console.error("Gagal menambahkan ke cart", error);
    }
  }

  return (
    <>
      <div className="flex md:h-85 h-50 w-screen flex-row items-center gap-5 overflow-x-scroll overflow-y-hidden p-5">
        {products.slice(0, 20).map((product) => (
          <div key={product.product_id}>
            <div className="hover:border-select relative h-full w-full rounded-2xl border-2 border-gray-600/50 dark:border-neutral-200 bg-white dark:bg-gray-500/50 p-2 duration-300 hover:border-4 hover:shadow-xl">
              <Image
                src={"/addIcon.svg"}
                alt="add"
                width={20}
                height={20}
                className="hover:bg-select dark:hover:bg-green-900 justify-self-end rounded-full p-1 transition-colors duration-300 dark:invert"
                onClick={() => {addToCart(product.product_id)}}
              />
              <Link href={`/products/${product.product_id}`}>
                <div className="flex flex-col gap-2 md:p-3">
                  <div className="relative flex md:h-[140px] h-[90px] w-auto items-center justify-center border-b-2 pb-1">
                    <Image
                      src={product.image_URL}
                      alt="product"
                      width={100}
                      height={100}
                      className="h-full w-auto aspect-square"
                    />
                  </div>
                  <div className="truncate md:text-base text-xs">
                    <p className="font-bold">{product.brand}</p>
                    <p>{product.name}</p>
                    <p className="text-background3 dark:text-background2">
                      {formatPrice(product.price)}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="flex w-full items-center justify-center">
        <ShortPopup isOpen={showNotif} setIsOpen={setShowNotif} />
      </div>
    </>
  );
}
