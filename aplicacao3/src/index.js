import React from 'react';
import { createRoot } from 'react-dom/client'; // Importe a função createRoot
import { BrowserRouter as Router } from 'react-router-dom'; // Importe BrowserRouter
import './index.css';
import App from './App'; // Certifique-se de importar o arquivo correto
import reportWebVitals from './reportWebVitals';
import { DataProvider } from './DataContext';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <DataProvider>
      <Router> {/* Envolva o App com Router */}
        <App />
      </Router>
    </DataProvider>
  </React.StrictMode>
);

reportWebVitals();
