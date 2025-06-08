import Image from "next/image";
import { useEffect, useState } from "react";

export default function MiniProfile() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("http://localhost:8000/user/2");
        const data = await res.json();
        setUser(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-3">
      <Image
        src={"/profilePlaceHolder.svg"}
        alt="Profile Picture"
        height={50}
        width={50}
      />
      <div className="flex flex-col text-center">
        <p className="truncate">{user.username}</p>
        <p className="truncate">{user.Email}</p>
      </div>
      <div className="flex flex-row gap-5">
        <button className="rounded-2xl bg-pink-300 p-3 duration-300 hover:bg-pink-400">
          Edit Profile
        </button>
        <button className="rounded-2xl bg-red-500 p-3 duration-300 hover:bg-red-600">
          Logout
        </button>
      </div>
    </div>
  );
}
