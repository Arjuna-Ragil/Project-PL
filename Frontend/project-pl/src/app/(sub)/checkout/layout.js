import CheckoutNavBar from "../component/checkoutNavBar";

export default function SettingLayout({ children }) {
    return(
        <>
            <CheckoutNavBar/>
            {children}
        </>
    )
}