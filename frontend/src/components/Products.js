// src/components/Products.js
import React, { useEffect, useState } from 'react';
import NavBar from './NavBar'; // Import the NavBar component
import './Products.css';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [isAdmin, setIsAdmin] = useState(true); // Set to true for demo, replace with actual logic

    useEffect(() => {
        fetch('http://localhost:8080/api/products')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    return (
        <div>
            <NavBar isAdmin={isAdmin} /> {/* Use the NavBar component */}
            <h2>Product List</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Stock Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.productId}>
                            <td>{product.productId}</td>
                            <td>{product.name}</td>
                            <td>{product.description}</td>
                            <td>{product.price}</td>
                            <td>{product.stockQuantity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Products;
