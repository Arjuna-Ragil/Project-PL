import Image from "next/image";
import Footer from "../../component/footer";

export default async function ProductDetail({ params }) {
  const { productId } = await params;
  const res = await fetch(`http://localhost:8080/api/produk/${productId}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Gagal memuat produk`);
  }
  
  const product = await res.json();

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
      <div className="h-1/2 w-full p-10 pt-35">
        <div className="flex h-full w-full flex-col items-center justify-center gap-10 rounded-2xl bg-white dark:bg-gray-500/50 dark:text-white p-15 md:flex-row">
          <div className="relative h-full border-2 border-gray-400/50 dark:border-neutral-200 p-10">
            <Image
              src={product.image_URL}
              alt="product"
              width={600}
              height={600}
            />
          </div>
          <div className="flex flex-col gap-5 py-3">
            <div className="flex flex-col gap-2">
              <h2 className="truncate text-3xl font-bold lg:text-4xl">
                {product.brand}
              </h2>
              <h3 className="truncate text-2xl lg:text-4xl">{product.name}</h3>
              <p className="text-background3 dark:text-background2 truncate lg:text-3xl">
                {formatPrice(product.price)}
              </p>
            </div>
            <div>
              <p>Quantity</p>
            </div>
            <div className="flex w-full flex-row gap-3 border-b-2 border-gray-400/50 p-5">
              <button className="w-1/2 border-2 p-5 duration-200 hover:bg-pink-300">
                Add to Cart
              </button>
              <button className="bg-background3 hover:bg-select w-1/2 p-5 text-white duration-200">
                Checkout
              </button>
            </div>
            <div>
              <h3 className="text-justify text-lg lg:text-xl">Description</h3>
              <p className="text-base font-light lg:text-lg">
                {product.description}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
