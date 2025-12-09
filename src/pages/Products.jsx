import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import ProductCard from "../components/ProductCard.jsx";
const Products = () => {

    const { store } = useGlobalReducer();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-9xl text-amber-700">Products Page</h1>
            <p>Welcome to the Products page!</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                {store && store.products && store.products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default Products;