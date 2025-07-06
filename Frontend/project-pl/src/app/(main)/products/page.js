import Footer from "../component/footer";
import ProductShortList from "../component/productShortList";

export default function ProductPage() {
    return(
        <>
        <div className="p-10 flex flex-col gap-2 pt-30">
            <div className="flex flex-col gap-3">
                <h2 className="text-2xl font-semibold mx-5 border-b-2 w-fit">Skincare</h2>
                <ProductShortList/>
            </div>
            <div className="flex flex-col gap-3">
                <h2 className="text-2xl font-semibold mx-5 border-b-2 w-fit">Bodycare</h2>
                <ProductShortList/>
            </div>
            <div className="flex flex-col gap-3">
                <h2 className="text-2xl font-semibold mx-5 border-b-2 w-fit">Haircare</h2>
                <ProductShortList/>
            </div>
            <div className="flex flex-col gap-3">
                <h2 className="text-2xl font-semibold mx-5 border-b-2 w-fit">Makeup</h2>
                <ProductShortList/>
            </div>
            
        </div>
        <Footer />
        </>
    )
}