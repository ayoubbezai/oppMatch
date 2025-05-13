import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../routes/useAuth'

const RoleRoutes = ({ allowedRoles }) => {
    const { user, loading } = useAuth();

    if (loading) {
        return <div>Loading...</div>; // or a spinner
    }

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    if (!allowedRoles.includes(user.role)) {
        return <Navigate to="/unauthorized" replace />;
    }

    return <Outlet />;
};

export default RoleRoutes