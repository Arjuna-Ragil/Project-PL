import "../globals.css";
import { AccountProvider } from "../hooks/userAccount";

export default function CheckoutLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AccountProvider>
          <div className="from-background1 via-background2 to-background3 dark:from-backgroundDark1 dark:via-backgroundDark2 dark:to-backgroundDark3 fixed -z-50 h-screen w-screen bg-gradient-to-br from-10% via-40% opacity-50 dark:opacity-100 transition-colors duration-500"></div>
          {children}
        </AccountProvider>
      </body>
    </html>
  );
}