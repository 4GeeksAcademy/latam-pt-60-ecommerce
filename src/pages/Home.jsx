import React, { useState, useEffect } from "react";

import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import ProductCard from "../components/ProductCard.jsx";

export const Home = () => {
  const heroImageUrl = `https://plus.unsplash.com/premium_photo-1683141237355-d966b653f414?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`
  const {store, dispatch} =useGlobalReducer()

	const apiUrl = `https://products.carmonasamuel.lat/products/`;

	const fetchProducts = async () => {
		try {
			const response = await fetch(apiUrl);
			const data = await response.json();
			
			// manda los datos al store
			dispatch({ type: 'fetch_products', payload: data });

		} catch (error) {
			console.error("Error fetching products:", error);
		}
	};
	
	useEffect(() => {
		fetchProducts();
	}, []);


	return (<>
			<div className="relative w-full h-screen bg-white overflow-hidden">
				<img 
					src={heroImageUrl} 
					alt="Hero" 
					className="w-full h-full object-contain rotate-90"
				/>
				<div className="absolute inset-0 flex flex-col items-center justify-center">
					<h1 className="text-6xl md:text-9xl mb-32 font-bold drop-shadow-lg bg-gradient-to-r from-purple-700 to-amber-500 bg-clip-text text-transparent">
						CuerdaViva
					</h1>
					<p className="text-2xl md:text-4xl text-white drop-shadow-lg">Your adventure in music starts here.</p>
				</div>
			</div>
			<div className="flex flex-col w-full mx-auto max-w-7xl">
				<h2 className="text-3xl font-semibold mb-6 mt-8 text-center">Featured Products</h2>
				<div className="flex flex-wrap gap-6 justify-center mb-12 px-4">
					{store && store.products && store.products.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
				</div>
			</div>
		</>
	);
}; 