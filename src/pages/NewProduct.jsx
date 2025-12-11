import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewProduct = () => {
    
    const navigate = useNavigate()
    const labelClasses = "mb-2 font-bold text-gray-700";
    const inputClasses = "mb-4 p-2 border border-gray-300 rounded";

    const fields = [
        {
            label: "Product Name",
            name: "name",
            type: "text",
            placeholder: "product name"
        },
        {
            label: "Product Price",
            name: "price",
            type: "number",
            placeholder: "0"
        },
        {
            label: "Product Stock",
            name: "stock",
            type: "number",
            placeholder: "5"
        },
    ];
    
    const [ newProduct, setNewProduct ] = useState({
        name: "",
        price: 0,
        stock: 0,
    });

    const handleSubmit = async (event) => {
        event.preventDefault(); // evita que la pestaña se recargue
        console.log("New Product Submitted:", newProduct);

        const apiUrl = import.meta.env.VITE_API_URL + `products/`;
        
        const resp = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newProduct)
        })
        const data = await resp.json()
        console.log(data) // store maybe?
        if (resp.ok) {
            navigate("/") // Home
        }
    }

    const handleInput = (event) => {
        setNewProduct({
            ...newProduct,
            [event.target.name]: event.target.value // reemplaza esta propiedad
        })
    }

    return (<div className="flex flex-col items-center justify-start min-h-screen bg-gray-100">
        <h1 className="text-4xl text-amber-700 mt-8">New Products Page</h1>
        <h2 className="text-2xl text-amber-600 mt-4">Add your new products here!</h2>
        <div className="flex flex-column">
            <form className="flex flex-col min-w-[375px] mt-6 bg-white p-6 rounded">
                
                {
                    fields.map((field) => (
                        <div className="flex flex-col" key={`product-${field.name}`}>
                            <label htmlFor={`product-${field.name}`} className={labelClasses}>
                                {field.label}
                            </label>
                            <input id={`product-${field.name}`} 
                                name={field.name}
                                placeholder={field.placeholder}
                                type={field.type} className={inputClasses} 
                                onChange={handleInput}
                            />
                        </div>
                    ))
                }

                <button type="submit"
                    onClick={handleSubmit}
                    className="bg-amber-600 text-white p-2 rounded hover:bg-amber-700">
                    Add Product
                </button>

            </form>
        </div>
    </div>
    );
}

export default NewProduct;