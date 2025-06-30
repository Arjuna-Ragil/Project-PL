"use client";

import { useAccount } from "@/app/hooks/userAccount";
import Image from "next/image";
import { useState } from "react";

export default function EditProfile({ show }) {
  const { account } = useAccount();

  const [firstName, setFirstName] = useState("" || account?.name);
  const [lastName, setLastName] = useState("" || account?.name);
  const [username, setUsername] = useState("" || account?.username);
  const [email, setEmail] = useState("" || account?.email);
  const [phoneNumber, setPhoneNumber] = useState(account?.phoneNumber || "");

  return (
    <div className={`flex flex-col gap-10 ${show ? " " : "hidden"}`}>
      <div className="flex flex-col items-center justify-center gap-3">
        <h2 className="text-4xl font-semibold">Edit Profile</h2>
        <div className="group relative">
          <div className="absolute flex h-full w-full items-center justify-center rounded-full bg-black/50 opacity-0 backdrop-blur-sm duration-200 group-hover:opacity-100">
            <Image
              src={"/editIcon.svg"}
              alt="edit"
              width={20}
              height={20}
              className="invert"
            />
          </div>
          <Image
            src={"profilePlaceholder.svg"}
            alt="profile"
            width={100}
            height={100}
            className="dark:invert"
          />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-row justify-between gap-5">
          <div className="flex w-full flex-col gap-2">
            <p className="text-background3 dark:text-background2">First Name</p>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="border-2 p-2"
            />
          </div>
          <div className="flex w-full flex-col gap-2">
            <p className="text-background3 dark:text-background2">Last Name</p>
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="border-2 p-2"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-background3 dark:text-background2">Username</p>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border-2 p-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-background3 dark:text-background2">Email</p>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-2 p-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-background3 dark:text-background2">Phone Number</p>
          <input
            type="tel"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="border-2 p-2"
          />
        </div>
        <div className="flex flex-row justify-end gap-3 p-5">
            <button className="bg-select/70 hover:bg-select p-3 duration-200 rounded-lg">Save</button>
            <button className="bg-gray-500/70 hover:bg-gray-500 p-3 duration-200 rounded-lg">Cancel</button>
        </div>
      </div>
    </div>
  );
}
