"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CartItems({ setShowCart }) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("http://localhost:8000/cart");
        const data = await res.json();
        setCart(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <div className="flex flex-row items-center justify-between">
        <h2 className="text-3xl font-semibold">CART</h2>
        <button onClick={() => setShowCart(false)}>
          <Image src={"/closeIcon.svg"} alt="close" height={30} width={30} />
        </button>
      </div>
      <div className="flex-1 space-y-3 overflow-y-auto">
        {cart.map((item) => (
          <div
            key={item.product_id}
            className="h-35 w-full border-b-2 border-gray-600/50 bg-white p-2"
          >
            <div className="flex flex-row items-center gap-5 p-3">
              <div className="relative flex h-[100px] w-[100px] items-center justify-center border-r-2">
                <Image
                  src={item.image_URL}
                  alt="product"
                  width={70}
                  height={70}
                />
              </div>
              <div>
                <p>{item.name}</p>
                <p>Rp {item.price}</p>
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
        <button className="text-select hover:bg-select/50 duration-200">
          CONTINUE SHOPPING
        </button>
      </div>
    </>
  );
}
