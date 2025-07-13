'use client';

import Footer from "../component/footer";
import ProductShortList from "../component/productShortList";
import { useProduct } from "../../hooks/useProduct";

export default function ProductPage() {
    const { produk, loading, error } = useProduct();

    if (loading) return <div className="p-10">Loading...</div>;
    if (error) return <div className="p-10">Error: {error}</div>;
    if (!produk || produk.length === 0) return <div className="p-10">Tidak ada produk</div>;
    
    const groupedProduk = produk.reduce((acc, item) => {
        const kategori = item.kategori?.toLowerCase() || 'other';
        if (!acc[kategori]) acc[kategori] = [];
        acc[kategori].push(item);
        return acc;
    }, {});

    const categories = {
        skincare: "Skincare",
        bodycare: "Bodycare",
        haircare: "Haircare",
        makeup: "Makeup"
    };
    
    return(
        <>
        <div className="p-10 flex flex-col gap-2 pt-30">
            {Object.entries(categories).map(([key, label]) => (
                groupedProduk[key]?.length > 0 && (
                    <div key={key} className="flex flex-col gap-3">
                        <h2 className="text-2xl font-semibold mx-5 border-b-2 w-fit">{label}</h2>
                        <ProductShortList products={groupedProduk[key]}/>
                    </div>
                )
            ))}
            
        </div>
        <Footer />
        </>
    )
}