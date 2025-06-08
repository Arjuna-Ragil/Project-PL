import Image from "next/image";
import ProductShortList from "./component/productShortList";
import Hero from "./component/hero";
import FlashSaleShortList from "./component/flashSaleShortList";
import Footer from "./component/footer";

export default function Home() {
  return (
    <div className="flex h-full w-full flex-col">
      {/* Hero */}
      <Hero />

      {/* Product */}
      <div className="flex h-full w-full flex-col">
        <div className="flex h-15 flex-row items-center justify-center gap-10 border-b-2 border-gray-400 bg-white text-3xl">
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
          <h2 className="p-3 text-4xl">⚡ FLASH SALE</h2>
          <FlashSaleShortList />
        </div>
      </div>

      <div className="h-5 bg-gradient-to-b from-white/50 to-white/70"></div>

      {/* Exclusive */}
      <div className="flex flex-col gap-10 bg-white/70 p-10">
        <h2 className="text-5xl">Exclusive</h2>
        <div className="flex h-full w-full flex-row items-center justify-center gap-10">
          <Image
            src={"/exclusive1.svg"}
            alt="Exclusive Product"
            width={500}
            height={700}
          />
          <Image
            src={"/exclusive2.svg"}
            alt="Exclusive Product"
            width={500}
            height={700}
          />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
