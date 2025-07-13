'use client'

import { useAccount } from "@/app/hooks/userAccount";
import Image from "next/image";

export default function Account({show}) {
    const { account } = useAccount()

    return(
        <div className={`flex flex-col gap-10 ${show ? " " : "hidden"}`}>
            <div className="flex flex-col items-center justify-center gap-3">
                <h2 className="text-4xl font-semibold">Account Info</h2>
                <Image src={"profilePlaceholder.svg"} alt="profile" width={100} height={100} className="dark:invert"/>
            </div>
            <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-2">
                    <p className="text-background3 dark:text-background2">Full Name</p>
                    <h3 className="text-2xl">{account?.fullName}</h3>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-background3 dark:text-background2">Username</p>
                    <h3 className="text-2xl">{account?.username}</h3>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-background3 dark:text-background2">Email</p>
                    <h3 className="text-2xl">{account?.email}</h3>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-background3 dark:text-background2">Phone Number</p>
                    <h3 className="text-2xl">{account?.phoneNumber}</h3>
                </div>
            </div>
        </div>
    )
}