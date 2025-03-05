import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${id}`);
                const data = await response.json();
                setProduct(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching product details:", error);
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) {
        return <div className="text-center py-10 text-xl">Loading...</div>;
    }

    if (!product) {
        return <div className="text-center py-10 text-xl">Product not found!</div>;
    }

    return (
        <div className="max-w-5xl mx-auto p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Product Image */}
                <div className="flex justify-center">
                    <img src={product.image} alt={product.title} className="w-96 h-96 object-contain"/>
                </div>

                {/* Product Details */}
                <div>
                    <h2 className="text-3xl font-bold">{product.title}</h2>
                    <p className="text-gray-600 mt-2">{product.description}</p>
                    <p className="text-2xl font-semibold mt-4 text-blue-600">${product.price}</p>
                    <p className="text-gray-500 mt-2">Category: <span className="text-gray-800 font-medium">{product.category}</span></p>

                    {/* Add to Cart Button */}
                    <button className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
