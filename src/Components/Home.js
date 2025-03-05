import React from "react";
import { Link } from "react-router-dom";


const Home = () => {
    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="relative w-full h-[500px] flex items-center justify-center bg-gray-900 text-white">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Discover the Latest Electronics</h1>
                    <p className="mt-4 text-lg">Shop the best deals on gadgets, smartphones, and more!</p>
                    <Link to="/products" className="mt-6 inline-block bg-blue-500 px-6 py-3 text-white text-lg rounded-lg hover:bg-blue-600">
                        Shop Now
                    </Link>
                </div> 
            </section>

            {/* Categories Section */}
            <section className="py-12 px-6">
                <h2 className="text-3xl font-bold text-center mb-8">Shop by Category</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <Link to="/products?category=smartphones" className="block bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg">
                        <img src="https://via.placeholder.com/150" alt="Smartphones" className="w-full h-40 object-cover rounded-lg mb-4"/>
                        <h3 className="text-xl font-semibold text-center">Smartphones</h3>
                    </Link>
                    <Link to="/products?category=laptops" className="block bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg">
                        <img src="https://via.placeholder.com/150" alt="Laptops" className="w-full h-40 object-cover rounded-lg mb-4"/>
                        <h3 className="text-xl font-semibold text-center">Laptops</h3>
                    </Link>
                    <Link to="/products?category=headphones" className="block bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg">
                        <img src="https://via.placeholder.com/150" alt="Headphones" className="w-full h-40 object-cover rounded-lg mb-4"/>
                        <h3 className="text-xl font-semibold text-center">Headphones</h3>
                    </Link>
                    <Link to="/products?category=gaming" className="block bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg">
                        <img src="https://via.placeholder.com/150" alt="Gaming" className="w-full h-40 object-cover rounded-lg mb-4"/>
                        <h3 className="text-xl font-semibold text-center">Gaming</h3>
                    </Link>
                </div>
            </section>

            {/* Featured Products */}
            <section className="py-12 px-6 bg-gray-50">
                <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg">
                        <img src="https://via.placeholder.com/200" alt="Product 1" className="w-full h-48 object-cover rounded-lg"/>
                        <h3 className="text-xl font-semibold mt-4">Smartphone X</h3>
                        <p className="text-gray-600">$799</p>
                        <Link to="/product/1" className="block mt-4 text-blue-500 hover:underline">View Details</Link>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg">
                        <img src="https://via.placeholder.com/200" alt="Product 2" className="w-full h-48 object-cover rounded-lg"/>
                        <h3 className="text-xl font-semibold mt-4">Gaming Laptop Pro</h3>
                        <p className="text-gray-600">$1,299</p>
                        <Link to="/product/2" className="block mt-4 text-blue-500 hover:underline">View Details</Link>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg">
                        <img src="https://via.placeholder.com/200" alt="Product 3" className="w-full h-48 object-cover rounded-lg"/>
                        <h3 className="text-xl font-semibold mt-4">Wireless Headphones</h3>
                        <p className="text-gray-600">$199</p>
                        <Link to="/product/3" className="block mt-4 text-blue-500 hover:underline">View Details</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
