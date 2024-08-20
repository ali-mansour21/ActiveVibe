import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./routes/AuthContext";
import PublicRoute from "./routes/components/PublicRoute";
import Login from "./auth/components/Login";
import Register from "./auth/components/Register";
function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<PublicRoute element={Login} />} />
            <Route
              path="/register"
              element={<PublicRoute element={Register} />}
            />
            {/* Add other routes here */}
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
