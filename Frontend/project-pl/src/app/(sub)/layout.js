import { AccountProvider } from "../hooks/userAccount";

export default function SubLayout({ children }) {
  return (
        <AccountProvider>
          {children}
        </AccountProvider>
  );
}