'use client'

import Image from "next/image";
import { useState } from "react";
import Account from "./component/account";
import EditProfile from "./component/editProfile";
import Appearance from "./component/appearance";

export default function Setting() {
    const [info, setInfo] = useState(true)
    const [edit, setEdit] = useState(false)
    const [appearance, setAppearance] = useState(false)

  return (
    <>
      <div className="h-1/2 w-full p-10 pt-35 dark:text-white">
        <div className="grid h-full w-full grid-cols-3 gap-10 rounded-2xl bg-white dark:bg-gray-500/50 p-15">
          <div className="flex flex-col items-start just gap-5 border-r-2 p-3">
            <h2 className="text-5xl font-semibold self-center">Setting</h2>
            <button className="flex flex-row items-center gap-4 hover:bg-select/50 p-3 rounded-lg duration-150 w-full" onClick={() => {setInfo(true), setEdit(false), setAppearance(false)}}>
                <Image src={"/profileIcon.svg"} alt="profile" width={40} height={40} className="invert dark:invert-0"/>
                <p>Account Info</p>
            </button>
            <button className="flex flex-row items-center gap-4 hover:bg-select/50 p-3 rounded-lg duration-150 w-full" onClick={() => {setInfo(false), setEdit(true), setAppearance(false)}}>
                <Image src={"/editIcon.svg"} alt="edit" width={40} height={40} className="p-1 dark:invert"/>
                <p>Edit Profile</p>
            </button>
            <button className="flex flex-row items-center gap-4 hover:bg-select/50 p-3 rounded-lg duration-150 w-full" onClick={() => {setInfo(false), setEdit(false), setAppearance(true)}}>
                <Image src={"/appearanceIcon.svg"} alt="appearance" width={40} height={40} className="dark:invert"/>
                <p>Appearance</p>
            </button>
          </div>
          <div className="col-span-2">
            <Account show={info}/>
            <EditProfile show={edit}/>
            <Appearance show={appearance}/>
          </div>
        </div>
      </div>
    </>
  );
}
