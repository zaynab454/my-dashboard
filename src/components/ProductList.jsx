import React from "react";
import "../styles/productList.css";  
import Image5 from "../assets/airpods.avif"; 
import Image6 from "../assets/casque.png"; 
import Image7 from "../assets/pc-portable.jpg"; 
import Image8 from "../assets/iPhone.png"; 


const products = [
    {
        image: Image5,
        name: 'Laptop',
        description: '15 inch display, 8GB RAM, 512GB SSD',
        price: '899.99',
        category: 'electronics',
    },
    {
        image: Image6,
        name: 'Casque',
        description: 'Ergonomic design, wireless connectivity',
        price: '29.99',
        category: 'accessories'
    },
    {
        image: Image7,
        name: 'PC Portable',
        description: 'Mechanical keys, backlit RGB',
        price: '49.99',
        category: 'accessories'
    },
    {
        image: Image8,
        name: 'Smartphone',
        description: '6.5 inch display, 128GB storage, 5G support',
        price: '699.99',
        category: 'electronics'
    },
];

const ProductList = () => {
    return (
        <div className="product--list">
            <div className="list--header">
                <h2>Products</h2>
                <select>
                    <option value="electronics">Electronics</option>
                    <option value="accessories">Accessories</option>
                </select>
            </div>
            <div className="list--container">
                {products.map((product, index) => (
                    <div className="list" key={index}>
                        <div className="product--detail">
                            <img src={product.image} alt={product.name} />
                            <h2>{product.name}</h2>
                        </div>
                        <span>{product.description}</span>
                        <span>${product.price}</span>
                        <button className="add-to-cart">Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
