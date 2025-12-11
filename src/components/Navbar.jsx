import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="flex items-center xl:px-48 px-8 py-2 bg-amber-800 text-white">
			<div className="flex w-full items-center">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">CuerdaViva</span>
				</Link>
				<div className="ml-auto">
					<Link to="/products">
						<button className="bg-white text-sm text-amber-800 px-4 py-2 rounded">
							Products
						</button>
					</Link>
					<Link to="/products/add" className="ml-4">
						<button className="bg-white text-sm text-amber-800 px-4 py-2 rounded">
							Add Product
						</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};