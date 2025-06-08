"use client";

import Footer from "@/app/(main)/component/footer";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

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
    <div className="flex h-full w-full flex-col pt-27">
      <div className="h-117 w-full bg-[url('/flashHero.svg')]"></div>
      <div className="flex h-full w-full flex-row items-center justify-between bg-white p-5">
        <Link href="/">
          <Image src={"/backIcon.svg"} alt="back" height={50} width={50} />
        </Link>
        <p>time</p>
      </div>
      <div className="grid h-full w-full grid-cols-4 gap-5 bg-white/50 p-10">
        {products.map((product) => (
          <div key={product.product_id}>
            <Link href={`/products/${product.product_id}`}>
              <div className="hover:border-select relative h-full w-full rounded-2xl border-2 border-gray-600/50 bg-white p-2 duration-300 hover:border-4 hover:shadow-xl">
                <Image
                  src={"/addIcon.svg"}
                  alt="add"
                  width={30}
                  height={30}
                  className="hover:bg-select justify-self-end rounded-full p-1 transition-colors duration-300"
                />
                <div className="flex flex-col gap-2 p-3">
                  <div className="relative flex h-[140px] w-auto items-center justify-center border-b-2">
                    <Image
                      src={product.image_URL}
                      alt="product"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="truncate">
                    <p className="font-bold">{product.brand}</p>
                    <p>{product.name}</p>
                    <p className="text-background3">
                      {formatPrice(product.price)}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
