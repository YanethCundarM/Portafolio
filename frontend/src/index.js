import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js'; // Asegúrate de que la extensión esté aquí
import './index.css'; // Si tienes estilos, si no, puedes omitir esto

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

