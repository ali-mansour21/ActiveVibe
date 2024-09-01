/* eslint-disable react/prop-types */
import  { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user data exists in localStorage (or another secure storage)
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData && userData.token && userData.role) {
      setIsAuthenticated(true);
      setUser({ role: userData.role, token: userData.token });
    }
  }, []);

  const login = (token, role) => {
    // Store the token and role in local storage
    localStorage.setItem("userData", JSON.stringify({ token, role }));
    setIsAuthenticated(true);
    setUser({ role, token });
  };

  const logout = () => {
    localStorage.removeItem("userData");
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
