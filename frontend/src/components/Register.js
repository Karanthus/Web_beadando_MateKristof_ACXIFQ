// src/components/Register.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavBar from "./NavBar";

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [isAdmin, setIsAdmin] = useState(true); // Set to true for demo, replace with actual logic

    const handleRegister = (e) => {
        e.preventDefault();
        setError(''); // Reset error message

        fetch('http://localhost:8080/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, passwordHash: password, email }),
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Registration failed');
            }
        })
        .then(data => {
            console.log('Registration successful:', data);
            navigate('/login'); // Redirect to login after successful registration
        })
        .catch(err => {
            setError(err.message);
        });
    };

    return (
        <div>
            <NavBar isAdmin={isAdmin} /> {/* Use the NavBar component */}
            <h2>Register</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleRegister}>
                <label>
                    Username:
                    <input 
                        type="text" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        required 
                    />
                </label>
                <br />
                <label>
                    Email:
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </label>
                <br />
                <label>
                    Password:
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </label>
                <br />
                <button type="submit">Register</button>
            </form>
            <p>
                Already have an account? <Link to="/login">Login here</Link>
            </p>
        </div>
    );
};

export default Register;
