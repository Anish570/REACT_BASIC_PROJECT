import React, { useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
    const [User, setUser] = useState(false);

    return (
        User ? <Outlet /> : <Navigate to="/login" />

    )
}

export default PrivateRoutes