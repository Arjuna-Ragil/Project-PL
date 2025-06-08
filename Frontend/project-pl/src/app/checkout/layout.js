import CheckoutNavBar from "./component/checkoutNavBar";

export default function CheckoutLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="from-background1 via-background2 to-background3 fixed -z-50 h-screen w-screen bg-gradient-to-br from-10% via-40%"></div>
        <CheckoutNavBar/>
        {children}
      </body>
    </html>
  );
}