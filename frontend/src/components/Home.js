import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';


const Home = () => {
    // Example state for user role (this could come from props, context, or API)
    const [isAdmin, setIsAdmin] = useState(true); // Set to true for demo, replace with actual logic

    return (
        <div>
            <h1>Welcome to the Home Page</h1>
            <p>This is a sample home page for your webshop.</p>
            
            <nav>
                <ul>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    
                    {/* Conditionally render the Admin link if the user is an admin */}
                    {isAdmin && <li><Link to="/admin">Admin Page</Link></li>}
                </ul>
            </nav>
        </div>
    );
};

export default Home;
