// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // You can use the same CSS from Products.css or adjust it here

const NavBar = ({ isAdmin }) => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Login/Register</Link></li>
                <li><Link to='/products'>Products</Link></li>
                {isAdmin && <li><Link to="/admin">Admin Page</Link></li>}
            </ul>
        </nav>
    );
};

export default NavBar;
