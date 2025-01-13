import React from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

function ProtectedRoute({ children }) {
    const studentCode = Cookies.get('studentCode');

    if (!studentCode) {
        return <Navigate to="/login" replace />;
    }

    return children;
}

export default ProtectedRoute;