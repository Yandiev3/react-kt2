import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Убедитесь, что путь к файлу App.js правильный

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);