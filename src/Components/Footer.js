import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Company Info */}
                <div>
                    <h2 className="text-2xl font-bold">ElectroShop</h2>
                    <p className="mt-2 text-gray-400">
                        Your one-stop shop for the latest electronics and gadgets.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><Link to="/" className="text-gray-400 hover:text-blue-400">Home</Link></li>
                        <li><Link to="/products" className="text-gray-400 hover:text-blue-400">Products</Link></li>
                        <li><Link to="/cart" className="text-gray-400 hover:text-blue-400">Cart</Link></li>
                        <li><Link to="/contact" className="text-gray-400 hover:text-blue-400">Contact</Link></li>
                    </ul>
                </div>

                {/* Social Media & Contact */}
                <div>
                    <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
                    <div className="flex space-x-4">
                        <a href="https://facebook.com/electroshop" className="text-gray-400 hover:text-blue-400 text-2xl">📘</a> {/* Facebook */}
                        <a href="https://twitter.com/electroshop" className="text-gray-400 hover:text-blue-400 text-2xl">🐦</a> {/* Twitter */}
                        <a href="https://instagram.com/electroshop" className="text-gray-400 hover:text-blue-400 text-2xl">📸</a> {/* Instagram */}
                        <a href="https://youtube.com/electroshop" className="text-gray-400 hover:text-blue-400 text-2xl">🎥</a> {/* YouTube */}
                    </div>
                    <p className="mt-4 text-gray-400">📧 support@electroshop.com</p>
                    <p className="text-gray-400">📞 +1 234 567 890</p>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center mt-8 border-t border-gray-700 pt-4">
                <p className="text-gray-500">© {new Date().getFullYear()} ElectroShop. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
