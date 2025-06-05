export default function Home() {
  return (
    <div className="flex flex-col w-full h-full">
      {/* Hero */}
      <div className="w-full h-22 bg-heroShadow"></div>
      <div className="bg-[url('/homeHero.svg')] h-120 p-23 text-white flex flex-col gap-10 border-b-2 border-black">
        <h1 className="text-6xl font-extrabold">Step Into Style</h1>
        <div className="flex flex-col w-1/3">
          <h2 className="text-3xl font-medium">Unleash Your Walk</h2>
          <p className="text-xl">Discover the latest collection of sneakers, boots, & everyday kicks</p>
        </div>
        <div className="text-black text-xl flex flex-row gap-5">
          <button className="bg-container p-3 rounded-lg hover:bg-containerHover transition-all duration-150">SHOP NOW</button>
          <button className="bg-container p-3 rounded-lg hover:bg-containerHover transition-all duration-150">NEW ARRIVALS</button>
        </div>
      </div>
      {/* Product */}
      <div className="h-full w-full p-5 flex flex-col gap-5">
        <div className="flex flex-row gap-5 justify-center items-center text-3xl">
          <button className="hover:border-b-2">New Arrivals</button>
          <button className="hover:border-b-2">Trending</button>
        </div>
        <div>
          list
        </div>
        <h2>BEST OF LOGO</h2>
        <div>
          list
        </div>
      </div>
    </div>
  );
}
