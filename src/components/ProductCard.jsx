import React from 'react';
import useGlobalReducer from '../hooks/useGlobalReducer';

const ProductCard = ({ product }) => {

	const { store, dispatch } = useGlobalReducer();

	const isSelected = store.shoppingCart.find(item => item.id == product.id)

	return (
		<div className="border rounded-lg p-4 shadow-md text-black flex flex-col items-center">
			{/* <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" /> */}
			<h2 className="text-xl font-semibold mb-2">{product.name}</h2>
			<p className="text-gray-700 mb-4">${product.price}</p>
			<button
			 	onClick={() => dispatch({
					type: "add_to_shopping_cart",
					payload: product
				  })}
				
				disabled={isSelected}

				className={"bg-amber-500 text-white px-4 py-2 rounded hover:bg-amber-600 " + (isSelected ? "disabled:bg-gray-200" : "") }>
				Add to Cart
			</button>
		</div>
	);
};

export default ProductCard;