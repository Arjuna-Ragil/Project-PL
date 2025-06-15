import Image from "next/image";
import ProductShortList from "./component/productShortList";
import Hero from "./component/hero";
import FlashSaleList from "./component/flashSaleList";
import Footer from "./component/footer";

export default function Home() {
  return (
    <div className="flex h-full w-full flex-col">
      {/* Hero */}
      <Hero />

      {/* Product */}
      <div className="flex h-full w-full flex-col">
        <div className="flex h-15 flex-row items-center justify-center gap-10 border-b-2 border-gray-400 bg-white text-lg md:text-3xl">
          <button className="border-select duration-100 hover:border-b-2">
            Best Deals
          </button>
          <button className="border-select duration-100 hover:border-b-2">
            New Beauty
          </button>
        </div>
        <div className="bg-white/30">
          <ProductShortList />
        </div>

        <div className="h-3 bg-gradient-to-b from-white/30 to-white/50"></div>

        <div className="flex h-full w-full flex-col bg-white/50">
          <h2 className="text-xl max-md:text-center md:p-3 md:text-4xl">
            ⚡ FLASH SALE
          </h2>
          <div className="flex h-50 w-screen flex-row items-center gap-5 overflow-x-scroll overflow-y-hidden p-5 md:h-85">
            <FlashSaleList amount={20}/>
          </div>
        </div>
      </div>

      <div className="h-5 bg-gradient-to-b from-white/50 to-white/70"></div>

      {/* Exclusive */}
      <div className="flex flex-col gap-3 bg-white/70 py-3 md:gap-10 md:p-10">
        <h2 className="text-xl max-md:text-center md:text-5xl">EXCLUSIVE</h2>
        <div className="flex h-full w-full flex-row items-center justify-center md:gap-10">
          <div className="relative aspect-square w-full">
            <Image
              src="/exclusive1.svg"
              alt="Exclusive Product"
              fill
              className="object-contain"
            />
          </div>
          <div className="relative aspect-square w-full">
            <Image
              src="/exclusive2.svg"
              alt="Exclusive Product"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
