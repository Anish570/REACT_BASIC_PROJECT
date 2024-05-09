import React, { useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './AuthContext';

const PrivateRoutes = ({ children }) => {
    const { user } = useAuth()

    return (
        user ? <Outlet /> : <Navigate to="/login" />

    )
}

export default PrivateRoutes