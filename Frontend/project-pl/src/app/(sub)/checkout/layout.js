import { CheckoutNavProvider } from "@/app/hooks/useCheckoutNav";
import CheckoutNavBar from "../component/checkoutNavBar";
import { CartProvider } from "@/app/hooks/useCart";

export default function SettingLayout({ children }) {
    return(
        <>
            <CartProvider>
                <CheckoutNavProvider>
                    <CheckoutNavBar/>
                    {children}
                </CheckoutNavProvider>
            </CartProvider>
        </>
    )
}