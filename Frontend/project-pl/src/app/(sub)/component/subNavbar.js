'use client'

import { useAccount } from "@/app/hooks/userAccount";
import Image from "next/image";
import Link from "next/link";

export default function SubNavBar() {
    const { account } = useAccount()

    return(
         <div className="fixed z-50 w-full">
            <div className="h-3 w-full bg-white/50 backdrop-blur-2xl"></div>
            <div className="z-40 flex w-full flex-row justify-between bg-white p-5 text-black gap-5">
                <div className="flex flex-row gap-10">
                    <Link href={"/"}>
                        <Image src={"/logo.svg"} alt="logo" height={120} width={120} />
                    </Link>
                </div> 
                <div className="flex flex-row gap-3 items-center">
                    <p>{account?.name}</p>
                    <Image src={"/profilePlaceholder.svg"} alt="profile" width={50} height={50}/>
                </div>
            </div>
        </div>
    )
}