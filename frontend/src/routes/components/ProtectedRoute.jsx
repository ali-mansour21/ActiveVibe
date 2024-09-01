/* eslint-disable react/prop-types */

import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../AuthContext";

const ProtectedRoute = ({ requiredRole }) => {
  const { isAuthenticated, user } = useAuth();

  // Check if the user is authenticated and matches the required role
  if (!isAuthenticated || (requiredRole && user.role !== requiredRole)) {
    return <Navigate to="/auth" replace />; // Redirect if not authorized
  }

  return <Outlet />; // Render the protected component if authorized
};

export default ProtectedRoute;
