// src/Components/ProductList.js
import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Phone", price: 500 },
  ];

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => dispatch(addItem(product))}>
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
