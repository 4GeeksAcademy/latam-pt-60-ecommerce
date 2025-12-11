import { useState } from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer"

export const Navbar = () => {

	const { store, dispatch } = useGlobalReducer();
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const removeFromCart = (item) => {
		dispatch({
			type: "remove_from_cart",
			payload: item
		})
	}


	return (
		<nav className="flex items-center xl:px-48 px-8 py-2 bg-amber-800 text-white">
			<div className="flex w-full items-center">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">CuerdaViva</span>
				</Link>
				<div className="ml-auto space-x-2">

					<button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="relative bg-white text-sm text-amber-800 px-4 py-2 rounded">
						Cart [{ store.shoppingCart.length }]
						{isDropdownOpen && store.shoppingCart.length != 0  && <div className="absolute bg-white shadow-lg rounded-md border-1 border-amber-800 z-500 text-amber-800  min-w-[200px]">
							{
								store.shoppingCart && store.shoppingCart.map((item, key) => <p className={
									`w-auto p-2 hover:bg-amber-700/30 ${key == 0 && "rounded-t-md"} ${ key == (store.shoppingCart.length - 1) && "rounded-b-md"}`}
									key={key}

									onClick={() => removeFromCart(item)}
								>
									{item.name}
								</p>)
							}
						</div>}
					</button>

					<Link to="/products">
						<button className="bg-white text-sm text-amber-800 px-4 py-2 rounded">
							Products
						</button>
					</Link>
					<Link to="/products/add">
						<button className="bg-white text-sm text-amber-800 px-4 py-2 rounded">
							Add Product
						</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};