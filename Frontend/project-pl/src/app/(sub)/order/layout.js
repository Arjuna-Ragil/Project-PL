import SubNavBar from "../component/subNavbar";

export default function OrderLayout({ children }) {
    return(
        <>
            <SubNavBar/>
            {children}
        </>
    )
}