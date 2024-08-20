import { Navigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

// eslint-disable-next-line react/prop-types
const PublicRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  return !isAuthenticated ? children : <Navigate to="/"></Navigate>;
};

export default PublicRoute;
