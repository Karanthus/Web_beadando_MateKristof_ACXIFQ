import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/message')  // calling the backend API
      .then(res => res.json())
      .then(data => setMessage(data.message));
  }, []);

  return (
    <div className="App">
      <h1>School Project</h1>
      <p>Message from Backend: {message}</p>
    </div>
  );
}

export default App;
