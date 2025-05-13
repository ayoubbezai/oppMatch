import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../routes/useAuth'; // Adjust the path as needed

const ProtectedRoute = () => {
    const { user } = useAuth();

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;