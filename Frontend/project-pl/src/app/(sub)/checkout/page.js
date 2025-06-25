'use client'

import { useCheckoutNav } from "@/app/hooks/useCheckoutNav";
import OrderDetail from "./component/orderDetail";

export default function Checkout() {

  const { detail, pay, place } = useCheckoutNav()

  return (
    <div className="h-full w-full pt-45 p-5">
      <div className="bg-white rounded-2xl">
        <OrderDetail show={detail}/>
      </div>
    </div>
  );
}
