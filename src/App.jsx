// src/App.jsx
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import Login from './pages/Login';
import VirtualEnvironment from './pages/VirtualEnvironment';
import Reingreso from './pages/Reingreso';
import NoPage from './pages/NoPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="virtual_environment" element={<VirtualEnvironment />} />
          <Route path="reingreso" element={<Reingreso />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App