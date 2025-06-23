import { useAccount } from "@/app/hooks/userAccount";
import Image from "next/image";
import Link from "next/link";

export default function MiniProfile() {
  const { account } = useAccount()

  return (
    <div className="flex flex-col items-center justify-center gap-2 rounded-lg bg-white p-3 shadow-xl">
      <Image
        src={"/profilePlaceHolder.svg"}
        alt="Profile Picture"
        height={100}
        width={100}
      />
      <div className="flex flex-col text-center">
        <p className="truncate text-2xl font-semibold">{account?.name || "Guest"}</p>
        <p className="truncate">@{account?.username || "Guest"}</p>
      </div>
      <div className="flex w-full flex-col items-start justify-start gap-2 border-b-2 p-1">
        <button className="hover:bg-select/10 rounded-lg p-3 duration-300">
          My Orders
        </button>
        <button className="hover:bg-select/10 rounded-lg p-3 duration-300">
          Shipping Address
        </button>
        <Link href={"/setting"}>
          <button className="hover:bg-select/10 rounded-lg p-3 duration-300">
            Setting
          </button>
        </Link>
      </div>
      <button className="text-background3 hover:text-select group hover:bg-select/10 flex flex-row gap-3 self-start rounded-2xl p-3 duration-300">
        <Image
          src={"/logoutIcon.svg"}
          alt="logout"
          width={20}
          height={20}
          className="group-hover:brightness-110"
        />
        <p>Logout</p>
      </button>
    </div>
  );
}
