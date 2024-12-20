import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Admin.css';

const Admin = () => {
    const [newProduct, setNewProduct] = useState({
        name: '',
        description: '',
        price: '',
        stockQuantity: '',
    });

    const [updateProduct, setUpdateProduct] = useState({
        product_id: '',
        name: '',
        description: '',
        price: '',
        stockQuantity: '',
    });

    const [products, setProducts] = useState([]);
    const [selectedProductId, setSelectedProductId] = useState('');

    useEffect(() => {
        fetch('http://localhost:8080/api/products')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    const handleNewProductChange = (e) => {
        setNewProduct({
            ...newProduct,
            [e.target.name]: e.target.value,
        });
    };

    const handleNewProductSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:8080/api/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newProduct),
        })
            .then(response => response.json())
            .then(data => {
                console.log("New product added: ", data);
                setNewProduct({
                    name: '',
                    description: '',
                    price: '',
                    stockQuantity: '',
                });
                fetchProducts();
            })
            .catch((error) => {
                console.error('Error adding product:', error);
            });
    };

    const fillTextFields = () => {
        const selectedProduct = products.find(product => product.name === selectedProductId);
        if (selectedProduct) {
            setUpdateProduct({
                productId: selectedProduct.productId,
                name: selectedProduct.name,
                description: selectedProduct.description,
                price: selectedProduct.price,
                stockQuantity: selectedProduct.stockQuantity,
            });
        } else {
            console.warn("No product found with ID:", selectedProductId);
        }
    };

    const handleUpdateProductSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:8080/api/products/${updateProduct.productId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updateProduct),
        })
            .then(response => response.json())
            .then(data => {
                console.log("Product updated: ", data);
                setUpdateProduct({
                    product_id: '',
                    name: '',
                    description: '',
                    price: '',
                    stockQuantity: '',
                });
                fetchProducts();
            })
            .catch((error) => {
                console.error('Error updating product:', error);
            });
    };

    const fetchProducts = () => {
        fetch('http://localhost:8080/api/products')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching products:', error));
    };

    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/products">Products</Link></li>
                </ul>
            </nav>

            <div>
                <h2>Admin Dashboard</h2>
                <p>Welcome, Admin! This is your control panel.</p>
            </div>

            <div>
                <h2>Add New Product</h2>
                <form onSubmit={handleNewProductSubmit}>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={newProduct.name}
                            onChange={handleNewProductChange}
                            required
                        />
                    </label>
                    <label>
                        Description:
                        <textarea
                            name="description"
                            value={newProduct.description}
                            onChange={handleNewProductChange}
                        />
                    </label>
                    <label>
                        Price:
                        <input
                            type="number"
                            name="price"
                            value={newProduct.price}
                            onChange={handleNewProductChange}
                            required
                        />
                    </label>
                    <label>
                        Stock Quantity:
                        <input
                            type="number"
                            name="stockQuantity"
                            value={newProduct.stockQuantity}
                            onChange={handleNewProductChange}
                            required
                        />
                    </label>
                    <button type="submit">Add Product</button>
                </form>
            </div>

            <div className="update-product-container">
                <h2>Update Product</h2>
                <label>
                    Select Product:
                    <select onChange={(e) => setSelectedProductId(e.target.value)}>
                        <option value="">-- Select a product --</option>
                        {products.map((product) => (
                            <option key={product.product_id} value={product.product_id}>
                                {product.name}
                            </option>
                        ))}
                    </select>
                </label>
                <button onClick={fillTextFields}>Fill Fields</button>

                <form onSubmit={handleUpdateProductSubmit}>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={updateProduct.name}
                            onChange={(e) => setUpdateProduct({ ...updateProduct, name: e.target.value })}
                            required
                        />
                    </label>
                    <label>
                        Description:
                        <textarea
                            name="description"
                            value={updateProduct.description}
                            onChange={(e) => setUpdateProduct({ ...updateProduct, description: e.target.value })}
                        />
                    </label>
                    <label>
                        Price:
                        <input
                            type="number"
                            name="price"
                            value={updateProduct.price}
                            onChange={(e) => setUpdateProduct({ ...updateProduct, price: e.target.value })}
                            required
                        />
                    </label>
                    <label>
                        Stock Quantity:
                        <input
                            type="number"
                            name="stockQuantity"
                            value={updateProduct.stockQuantity}
                            onChange={(e) => setUpdateProduct({ ...updateProduct, stockQuantity: e.target.value })}
                            required
                        />
                    </label>
                    <button type="submit">Update Product</button>
                </form>
            </div>
        </div>
    );
};

export default Admin;
