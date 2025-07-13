'use client'

import { useCart } from "@/app/hooks/useCart";
import Image from "next/image";
import { useRouter } from "next/navigation";
import axios from "axios";
// import { headers } from "next/headers";

export default function Summary() {
    const { cart } = useCart();
    const router = useRouter();

    const totalAmount = cart.reduce((sum, item) => sum + item.quantity, 0)
    const totalCost = cart.reduce((sum, added) => sum + added.quantity * added.price, 0)
    const totalDelivery = totalCost / 10
    const totalFinal = totalCost + totalDelivery

    function formatPrice(price) {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  }

  const handlePlaceOrder = async () => {
    try {
      const localStorageData = localStorage.getItem("token");
      if (!token) {
        alert("harus login dulu");
        return;
      }

      const response = await axios.post(
        "http://localhost:8080/api/orders",
        {
            items: cart.map(item => ({
                produkId: item.product_id,
                quantity: item.quantity
            })),
        },
        {
            headers: {
                Authorization: `Bearer ${localStorageData}`,
            },
        }
      );

      const orderId = response.data.orderId;
      alert("Order berhasil dibuat");
      clearCart();
      router.push(`/checkout/payment?orderId=${orderId}`);
  } catch (error) {
    console.error(err);
    alert("Gagal membuat order. Silakan coba lagi.");
  }
};
    return(
        <div className="bg-background1 dark:bg-backgroundDark1 flex flex-col p-2">
          <h2 className="text-2xl font-bold p-2">ORDER SUMMARY:</h2>
          <div className="bg-white dark:bg-gray-500/70 p-3">
            <p className="p-1">{totalAmount} Product(s)</p>
            <div className="flex-1 overflow-y-auto h-100 border-y-2 p-2">
                {cart.map((item) => (
                    <div
                    key={item.product_id}
                    className="h-35 w-full border-b-2 border-gray-600/50 dark:border-white/50 bg-white dark:bg-transparent"
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
                            <p>qty: {item.quantity}</p>
                            <p>Price: {formatPrice(item.price)}</p>
                            <p className="text-background3 dark:text-background2">Total: {formatPrice(item.quantity * item.price)}</p>
                        </div>
                        </div>
                    </div>
                    </div>
                ))}
            </div>
            <div className="flex flex-row justify-between p-1">
                <p>Product Total</p>
                <p>{formatPrice(totalCost)}</p>
            </div>
            <div className="flex flex-row justify-between p-1">
                <p>Delivery</p>
                <p>{formatPrice(totalDelivery)}</p>
            </div>
            <div className="flex flex-row justify-between items-center p-1">
                <p>
                    Total <br></br> (Inclusive of Tax)
                </p>
                <p>{formatPrice(totalFinal)}</p>
            </div>
            
            <button
                onClick={handlePlaceOrder}
                className="w-full bg-background2 dark:bg-backgroundDark2 text-white font-bold py-2 px-4 rounded mt-3 hover:bg-background3 dark:hover:bg-backgroundDark3"
                >
                    Place Order
                </button>
          </div>
        </div>
    );
}