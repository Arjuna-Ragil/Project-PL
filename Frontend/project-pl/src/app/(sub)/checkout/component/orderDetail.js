"use client";

import { useCheckoutNav } from "@/app/hooks/useCheckoutNav";
import Summary from "./summary";

export default function OrderDetail({ show }) {
  const { setPay, setDetail, setPlace } = useCheckoutNav();

  return (
    <div
      className={`flex flex-col justify-center gap-5 p-10 ${show ? " " : "hidden"}`}
    >
      <h1 className="text-4xl font-bold">SHIPPING DETAIL</h1>
      <div className="grid h-full w-full grid-cols-3 items-center justify-evenly gap-5">
        <div className="col-span-2 flex h-full w-full flex-col justify-center gap-5 border-2 border-gray-400 p-5">
          <h2 className="text-3xl font-bold">CONTACT INFORMATION</h2>
          <div className="grid grid-cols-2 gap-3">
            <input
              type="text"
              placeholder="First name"
              className="focus:border-select border-1 p-3 focus:outline-0"
            />
            <input
              type="text"
              placeholder="Last name"
              className="focus:border-select border-1 p-3 focus:outline-0"
            />
            <input
              type="tel"
              placeholder="Phone number"
              className="focus:border-select border-1 p-3 focus:outline-0"
            />
            <input
              type="email"
              placeholder="Email"
              className="focus:border-select border-1 p-3 focus:outline-0"
            />
          </div>
          <h2 className="text-3xl font-bold">ADDRESS</h2>
          <div className="grid grid-cols-2 gap-3">
            <input
              type="text"
              placeholder="Street address"
              className="focus:border-select col-span-2 border-1 p-3 focus:outline-0"
            />
            <input
              type="text"
              placeholder="Country"
              className="focus:border-select border-1 p-3 focus:outline-0"
            />
            <input
              type="text"
              placeholder="State / Province"
              className="focus:border-select border-1 p-3 focus:outline-0"
            />
            <input
              type="text"
              placeholder="City"
              className="focus:border-select border-1 p-3 focus:outline-0"
            />
            <input
              type="text"
              placeholder="District"
              className="focus:border-select border-1 p-3 focus:outline-0"
            />
          </div>
          <button
            className="bg-background3 hover:bg-background3/70 p-3 text-3xl text-white"
            onClick={() => {
              setPay(true), setDetail(false), setPlace(false);
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
