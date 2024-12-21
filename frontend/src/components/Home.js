import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import NavBar from './NavBar'; // Import the NavBar component

const Home = () => {
    // Example state for user role (this could come from props, context, or API)
    const [isAdmin, setIsAdmin] = useState(true); // Set to true for demo, replace with actual logic

    return (
        <div>
            {/* Add NavBar here */}
            <NavBar isAdmin={isAdmin} />  {/* Pass the isAdmin prop to the NavBar */}

            <h1>Welcome to the Home Page</h1>
            <p>This is the POC for your website.</p>
        </div>
    );
};

export default Home;
