import React from 'react';

const ProductCard = ({ product }) => {
	return (
		<div className="border rounded-lg p-4 shadow-md text-black flex flex-col items-center">
			{/* <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" /> */}
			<h2 className="text-xl font-semibold mb-2">{product.name}</h2>
			<p className="text-gray-700 mb-4">${product.price}</p>
			<button className="bg-amber-500 text-white px-4 py-2 rounded hover:bg-amber-600">
				Add to Cart
			</button>
		</div>
	);
};

export default ProductCard;