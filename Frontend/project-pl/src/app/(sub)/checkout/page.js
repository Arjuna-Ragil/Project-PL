'use client'

import { useCheckoutNav } from "@/app/hooks/useCheckoutNav";
import OrderDetail from "./component/orderDetail";
import OrderPayment from "./component/orderPayment";

export default function Checkout() {

  const { detail, pay, place } = useCheckoutNav()

  return (
    <div className="h-full w-full pt-45 p-5">
      <div className="bg-white dark:bg-gray-500/50 dark:text-white rounded-2xl">
        <OrderDetail show={detail}/>
        <OrderPayment show={pay}/>
      </div>
    </div>
  );
}
