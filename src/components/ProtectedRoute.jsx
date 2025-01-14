import React from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

function ProtectedRoute({ children }) {
    const studentCode = window.localStorage.getItem("CNU");

    if (!studentCode) {
        return <Navigate to="/login" replace />;
    }

    return children;
}

export default ProtectedRoute;