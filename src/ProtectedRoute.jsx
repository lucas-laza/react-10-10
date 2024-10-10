import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ isAuthenticated, isAdmin, children }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  if (isAdmin === false && window.location.pathname === '/admin') {
    return <Navigate to="/home" />;
  }
  return children;
};

export default ProtectedRoute;
