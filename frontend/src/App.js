import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:8080/api/message')
      .then(response => response.json())
      .then(data => setMessage(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  

  return (
    <div className="App">
      <h1>School Project</h1>
      <p>Message from Backend: {message}</p>
    </div>
  );
}

export default App;
