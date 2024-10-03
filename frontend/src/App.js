import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Products from './components/Products';
import Login from './components/Login';
import Home from './components/Home';
import Admin from './components/Admin';
import Register from './components/Register';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path='/register' element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/admin" element={<Admin />} />
            </Routes>
        </Router>
    );
}

export default App;
