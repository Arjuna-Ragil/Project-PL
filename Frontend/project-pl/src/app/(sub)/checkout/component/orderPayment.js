"use client";

import { useCheckoutNav } from "@/app/hooks/useCheckoutNav";
import Summary from "./summary";
import Image from "next/image";

export default function OrderPayment({ show }) {
  const { setPay, setDetail, setPlace } = useCheckoutNav();

  return (
    <div
      className={`flex flex-col justify-center gap-5 p-10 ${show ? " " : "hidden"}`}
    >
      <h1 className="text-4xl font-bold">PAYMENT METHODS</h1>
      <div className="grid h-full w-full grid-cols-3 items-center justify-evenly gap-5">
        <div className="col-span-2 flex h-full w-full flex-col justify-center items-center gap-7 border-2 border-gray-400 p-5">
					<h2 className="text-3xl font-semibold">Work in Progress with xendit</h2>
					<div className="flex flex-col items-center justify-center gap-3">
						<p className="text-xl">donate here :)</p>
						<Image src={"/donateJuna.jpeg"} alt="donate" width={250} height={250} className="rounded-3xl"/>
					</div>
          <button
            className="bg-background3 hover:bg-background3/70 p-3 text-3xl text-white w-full"
            onClick={() => {
              setPay(false), setDetail(false), setPlace(true);
            }}
          >
            Next
          </button>
        </div>
        <Summary />
      </div>
    </div>
  );
}
