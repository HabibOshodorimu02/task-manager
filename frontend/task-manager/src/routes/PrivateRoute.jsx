// src/routes/PrivateRoute.jsx
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

// Example: get auth info from localStorage, Redux, or Context
const getCurrentUser = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user;
};

const PrivateRoute = ({ allowedRoles }) => {
  const user = getCurrentUser();

  // If no user, redirect to login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // If user role not allowed, redirect to unauthorized or login
  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/login" replace />;
  }

  // If everything is fine, render the child route
  return <Outlet />;
};

export default PrivateRoute;
