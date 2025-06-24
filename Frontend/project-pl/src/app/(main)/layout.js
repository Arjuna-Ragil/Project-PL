import { CartProvider } from "../hooks/useCart";
import { AccountProvider } from "../hooks/userAccount";
import Navbar from "./component/navbar";

export default function MainLayout({ children }) {
  return (
        <AccountProvider>
          <CartProvider>
            <Navbar/>
            {children}
          </CartProvider>
        </AccountProvider>
  );
}
