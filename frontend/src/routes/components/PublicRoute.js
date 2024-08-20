
import { Navigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

// eslint-disable-next-line react/prop-types
const PublicRoute = ({ element: Element, ...rest }) => {
  const { isAuthenticated } = useAuth();

  return !isAuthenticated ? <Element {...rest} /> : <Navigate to="/" />;
};

export default PublicRoute;
