import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Admin = () => {
    // State for creating a new product
    const [newProduct, setNewProduct] = useState({
        name: '',
        description: '',
        price: '',
        stock_quantity: '',
    });

    // State for updating a product
    const [updateProduct, setUpdateProduct] = useState({
        product_id: '',
        name: '',
        description: '',
        price: '',
        stockQuantity: '',
    });

    // State for all products
    const [products, setProducts] = useState([]);

    // State for selected product ID
    const [selectedProductId, setSelectedProductId] = useState('');

    // Fetch products from the backend
    useEffect(() => {
        fetch('http://localhost:8080/api/products') // Ensure you have the correct URL
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching products:', error));
            
    }, []);

    // Handle input change for creating a new product
    const handleNewProductChange = (e) => {
        setNewProduct({
            ...newProduct,
            [e.target.name]: e.target.value,
        });
    };

    // Function for creating a new product (POST request)
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
                stock_quantity: '',
            });
            fetchProducts(); // Refetch products after adding a new one
        })
        .catch((error) => {
            console.error('Error adding product:', error);
        });
    };

    // Function for filling input fields with selected product data
    const fillTextFields = () => {
        const selectedProduct = products.find(product => product.name === selectedProductId);
        console.log("Products:", products); // Log all products
        if (selectedProduct) {
            setUpdateProduct({
                productId: selectedProduct.productId,
                name: selectedProduct.name,
                description: selectedProduct.description,
                price: selectedProduct.price,
                stockQuantity: selectedProduct.stockQuantity,
            });
            console.log("updateProduct values:", updateProduct); // Log selected product ID
            console.log("Filled fields with selected product:", selectedProduct); // Log filled data
        } else {
            console.warn("No product found with ID:", selectedProductId); // Warning if no product found
        }
    };

    // Function for updating an existing product (PUT request)
    const handleUpdateProductSubmit = (e) => {
        e.preventDefault();
        console.log("Updating product with ID:", updateProduct);
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
                stock_quantity: '',
            });
            fetchProducts(); // Refetch products after updating
        })
        .catch((error) => {
            console.error('Error updating product:', error);
        });
    };

    // Function to fetch products
    const fetchProducts = () => {
        fetch('http://localhost:8080/api/products')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching products:', error));
    };

    return (
        <div>
            {/* Navigation Menu */}
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/products">Products</Link></li>
                </ul>
            </nav>

            {/* Admin Dashboard Content */}
            <div>
                <h2>Admin Dashboard</h2>
                <p>Welcome, Admin! This is your control panel.</p>
            </div>

            {/* Create New Product */}
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
                            name="stock_quantity"
                            value={newProduct.stock_quantity}
                            onChange={handleNewProductChange}
                            required
                        />
                    </label>
                    <button type="submit">Add Product</button>
                </form>
            </div>

            {/* Dropdown to select product for updating */}
            <div>
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
                    <button onClick={fillTextFields}>Fill Fields</button>
                </label>

                {/* Input fields to edit selected product */}
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
                            name="stock_quantity"
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
