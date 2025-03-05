import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const cartItemCount = useSelector((state) => state.cart.items.reduce((total, item) => total + item.quantity, 0));

    return (
        <nav className="bg-gray-900 text-white shadow-lg">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <Link to="/" className="text-2xl font-bold">ElectroShop</Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6">
                        <Link to="/" className="hover:text-blue-400">Home</Link>
                        <Link to="/products" className="hover:text-blue-400">Products</Link>
                        <Link to="/cart" className="relative hover:text-blue-400">
                            Cart 🛒
                            {cartItemCount > 0 && (
                                <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                                    {cartItemCount}
                                </span>
                            )}
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
                        ☰
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-gray-800 py-3 px-4">
                    <Link to="/" className="block py-2 hover:text-blue-400" onClick={() => setMenuOpen(false)}>Home</Link>
                    <Link to="/products" className="block py-2 hover:text-blue-400" onClick={() => setMenuOpen(false)}>Products</Link>
                    <Link to="/cart" className="block py-2 hover:text-blue-400" onClick={() => setMenuOpen(false)}>
                        Cart 🛒 {cartItemCount > 0 && <span className="ml-2 bg-red-500 text-xs px-2 py-1 rounded-full">{cartItemCount}</span>}
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
