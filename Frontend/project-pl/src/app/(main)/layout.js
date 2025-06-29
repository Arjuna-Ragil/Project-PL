import { CartProvider } from "../hooks/useCart";
import { ProductProvider } from "../hooks/useProduct";
import { AccountProvider } from "../hooks/userAccount";
import Navbar from "./component/navbar";

export default function MainLayout({ children }) {
  return (
        <AccountProvider>
          <ProductProvider>
            <CartProvider>
              <Navbar/>
              {children}
            </CartProvider>
          </ProductProvider>
        </AccountProvider>
  );
}
