import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from './firebase.init';
import useRole from './Hooks/useRole';

const RequireAdmin = ({ children }) => {
    const [user, isloading] = useAuthState(auth)
    const [role, adminLoading] = useRole(user)
    console.log(role)
    let location = useLocation();
    if (isloading || adminLoading) {
        return
    }
    if (role !== 'admin') {
        localStorage.removeItem('token')
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default RequireAdmin;