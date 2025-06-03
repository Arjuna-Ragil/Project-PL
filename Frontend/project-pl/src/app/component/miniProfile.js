import Image from "next/image";

export default function MiniProfile() {
    return (
        <div className="flex flex-col justify-center items-center p-3 gap-4">
            <Image src={"/profilePlaceHolder.svg"} alt="Profile Picture" height={50} width={50}/>
            <div className="flex flex-col text-center">
                <p className="truncate">Username</p>
                <p className="truncate">test@gmail.com</p>
            </div>
            <div className="flex flex-row gap-5">
                <button className="bg-amber-400 p-3 rounded-2xl hover:bg-yellow-500">Edit Profile</button>
                <button className="bg-red-500 p-3 rounded-2xl hover:bg-red-600">Logout</button>
            </div>
        </div>
    )
}