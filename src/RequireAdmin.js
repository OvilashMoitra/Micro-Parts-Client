import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from './firebase.init';
import useAdmin from './Hooks/useAdmin';

const RequireAdmin = ({ children }) => {
    const [user, isloading] = useAuthState(auth)
    const [role] = useAdmin(user)
    let location = useLocation();
    if (isloading) {
        return
    }
    if (role !== 'admin') {
        signOut(auth)
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
};

export default RequireAdmin;