import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import Busca from './Busca'; // Certifique-se de ter este componente

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/busca" element={<Busca />} />
      {/* Adicione outras rotas aqui */}
    </Routes>
  );
}

export default App;
