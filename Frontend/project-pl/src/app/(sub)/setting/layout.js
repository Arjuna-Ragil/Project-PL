import SubNavBar from "../component/subNavbar";

export default function SettingLayout({ children }) {
    return(
        <>
            <SubNavBar/>
            {children}
        </>
    )
}