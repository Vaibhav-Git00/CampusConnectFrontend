// client/src/components/PrivateRoute.jsx
import React from 'react'; 
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token');

  // If there's a token, render the child component (e.g., Dashboard)
  // Otherwise, redirect to the login page
  return token ? children : <Navigate to="/login" />;
};

export default PrivateRoute;