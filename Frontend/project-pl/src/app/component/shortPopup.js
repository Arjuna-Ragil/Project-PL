'use client'

import { useEffect } from "react"

export default function ShortPopup({isOpen, setIsOpen}) {
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsOpen(false)
        }, 2000)
        return () => clearTimeout(timer)
    }, [isOpen])

    return (
        <div className={`flex h-15 w-1/4 items-center justify-center fixed top-10 bg-white border-2 border-select rounded-lg z-50 motion-preset-blur-down-md motion-duration-300 ${isOpen ? " " : "hidden"}`}>
            <p>product added to cart</p>
        </div>
    )
}