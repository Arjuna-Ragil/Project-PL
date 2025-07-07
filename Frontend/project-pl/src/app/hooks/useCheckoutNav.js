'use client'

const { createContext, useState, useContext } = require("react")

const CheckoutNavContext = createContext()

export function CheckoutNavProvider({ children }) {
    const [detail, setDetail] = useState(true)
    const [pay, setPay] = useState(false)
    const [place, setPlace] = useState(false)

    return(
        <CheckoutNavContext.Provider value={{ detail, setDetail, pay, setPay, place, setPlace}}>
            {children}
        </CheckoutNavContext.Provider>
    )
}

export function useCheckoutNav() {
    return useContext(CheckoutNavContext)
}