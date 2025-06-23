import Image from "next/image";
import Link from "next/link";

export default function CheckoutNavBar() {
    return(
         <div className="fixed z-50 w-full">
            <div className="h-3 w-full bg-white/50 backdrop-blur-2xl"></div>
            <div className="z-40 flex w-full flex-col justify-between bg-white p-5 text-black gap-5 border-b-2 border-gray-400">
                <div className="flex flex-row gap-10">
                    <Link href={"/"}>
                        <Image src={"/logo.svg"} alt="logo" height={120} width={120} />
                    </Link>
                </div>  
                <div className="flex flex-row gap-5 px-8">
                    <div className="flex flex-row gap-2 justify-center items-center">
                        <div className="bg-background2 rounded-full px-3 py-1">1.</div>
                        <h2 className="text-2xl font-semibold border-b-2">ORDER DETAIL</h2>
                    </div>
                    <div className="flex flex-row gap-2 justify-center items-center">
                        <div className="bg-background2 rounded-full px-3 py-1">2.</div>
                        <h2 className="text-2xl font-semibold">REVIEW & PAY</h2>
                    </div>
                    <div className="flex flex-row gap-2 justify-center items-center">
                        <div className="bg-background2 rounded-full px-3 py-1">3.</div>
                        <h2 className="text-2xl font-semibold">ORDER PLACED</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}