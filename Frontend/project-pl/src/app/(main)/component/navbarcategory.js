export default function NavbarCategory({hideCategory, showFullCategory, type}) {
    return (
        <div
            className={`flex sm:flex-row flex-col gap-5 ${hideCategory ? "max-lg:hidden" : ""} ${showFullCategory ? "" : "max-md:hidden"} motion-preset-blur-right-lg motion-duration-150 px-3 ${type} `}
        >
            <button
            className={`border-select transition-all duration-100 hover:border-b-2 max-sm:bg-select/30 max-sm:rounded-lg`}
            >
            SKINCARE
            </button>
            <button
            className={`border-select transition-all duration-100 hover:border-b-2 max-sm:bg-select/30 max-sm:rounded-lg`}
            >
            BODYCARE
            </button>
            <button
            className={`border-select transition-all duration-100 hover:border-b-2 max-sm:bg-select/30 max-sm:rounded-lg`}
            >
            HAIRCARE
            </button>
            <button
            className={`border-select transition-all duration-100 hover:border-b-2 max-sm:bg-select/30 max-sm:rounded-lg`}
            >
            MAKEUP
            </button>
        </div>
    )
}