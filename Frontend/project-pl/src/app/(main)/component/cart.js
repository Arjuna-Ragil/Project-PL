"use client";

import { useCart } from "@/app/hooks/useCart";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function CartItems({ setShowCart}) {

  const { cart, setCart } = useCart()
  const debounceTimer = useRef({});

  function formatPrice(price) {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  }

  async function updateToCart(productId, operation) {
    const updatedCart = cart.map(item => {
      if (item.product_id === productId) {
        const newQty =
          operation === "+" ? item.quantity + 1 : Math.max(1, item.quantity - 1);
        return { ...item, quantity: newQty };
      }
      return item;
    });

    setCart(updatedCart)

    const changedItem = updatedCart.find(item => item.product_id === productId)

    clearTimeout(debounceTimer.current[productId]);
    debounceTimer.current[productId] = setTimeout(async () => {
    try {
      const res = await fetch(`http://localhost:8000/cart/${productId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ quantity: changedItem.quantity })
      })
    } catch (error) {
      console.error(error)
    }}, 300)
  }

  async function deleteToCart(productId) {
    try {
      const updatedCart = cart.filter(item => item.product_id !== productId);
      setCart(updatedCart);

      const res = await fetch(`http://localhost:8080/cart/${productId}`, {
        method: "DELETE",
      })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <div className="flex flex-row items-center justify-between">
        <h2 className="text-3xl font-semibold p-1">CART</h2>
        <button onClick={() => setShowCart(false)}>
          <Image src={"/closeIcon.svg"} alt="close" height={30} width={30} className="dark:invert"/>
        </button>
      </div>
      <div className="flex-1 space-y-3 overflow-y-auto">
        {cart.map((item) => (
          <div
            key={item.product_id}
            className="h-35 w-full border-b-2 border-gray-600/50 dark:border-neutral-200 bg-white dark:bg-transparent p-2"
          >
            <div className="grid grid-cols-3 items-center gap-5 sm:p-3 ">
              <div className="relative flex h-[100px] w-[100px] items-center justify-center border-1 border-gray-400/50">
                <Image
                  src={item.image_URL}
                  alt="product"
                  width={70}
                  height={70}
                />
              </div>
              <div className="col-span-2 flex flex-col truncate md:text-base text-xs gap-2">
                <div className="flex flex-col">
                  <p className="font-bold">{item.brand}</p>
                  <p>{item.name}</p>
                  <p className="text-background3 dark:text-background2">{formatPrice(item.price)}</p>
                </div>
                <div className="flex flex-row items-center justify-end gap-3">
                  <Image src={"/deleteIcon.svg"} alt="delete" width={25} height={25} className="aspect-square p-1 bg-select/50 dark:bg-select hover:bg-select dark:hover:bg-select/50 rounded-full" onClick={() => deleteToCart(item.product_id)}/>
                  <Image src={"/minusIcon.svg"} alt="remove" width={25} height={25} className="aspect-square p-1 bg-select/50 dark:bg-select hover:bg-select dark:hover:bg-select/50 rounded-full" onClick={() => updateToCart(item.product_id, "-")}/>
                  <p>{item.quantity}</p>
                  <Image src={"/plusIcon.svg"} alt="add" width={25} height={25} className="p-1 bg-select/50 dark:bg-select hover:bg-select dark:hover:bg-select/50 rounded-full" onClick={() => updateToCart(item.product_id, "+")}/>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-3 border-t-2 border-gray-600/50 p-3 w-full justify-center items-center">
        <Link href={"/checkout"} className="w-full" onClick={() => setShowCart(false)}>
          <button className="bg-select hover:bg-select/70 text-white duration-200 w-full">
            CHECKOUT NOW
          </button>
        </Link>
        <button className="text-select hover:bg-select/50 duration-200 w-full" onClick={() => setShowCart(false)}>
          CONTINUE SHOPPING
        </button>
      </div>
    </>
  );
}
