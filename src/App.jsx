import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import Login from './pages/Login';
import VirtualEnvironment from './pages/VirtualEnvironment';
import ProtectedRoute from './components/ProtectedRoute';
import NoPage from './pages/NoPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/virtual_environment"
          element={
            <ProtectedRoute>
              <VirtualEnvironment />
            </ProtectedRoute>
          }
        />
        {/* <Route path="/reingreso" element={<Reingreso />} /> */}
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;