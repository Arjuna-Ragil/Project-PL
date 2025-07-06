'use client';

import Footer from "../component/footer";
import ProductShortList from "../component/productShortList";
import { useProduct } from "../../hooks/useProduct";

export default function ProductPage() {
    const { produk, loading, error } = useProduct();

    const groupedProduk = produk.reduce((acc, item) => {
        const kategori = item.kategori?.toLowerCase() || 'other';
        if (!acc[kategori]) acc[kategori] = [];
        acc[kategori].push(item);
        return acc;
    }, {});

    if (loading) return <div className="p-10">Loading...</div>
    if (error) return <div className="p-10">Error: {error}</div>
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