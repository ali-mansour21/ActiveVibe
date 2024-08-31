import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { AuthProvider } from "./routes/AuthContext";
import PublicRoute from "./routes/components/PublicRoute.jsx";
import Login from "./auth/components/Login";
import Register from "./auth/components/Register";
import Home from "./pages/Home/index.jsx";
import Events from "./pages/Events/index.jsx";
import EventDetail from "./components/EventDetail.jsx";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProfileScreen from "./components/ProfileScreen.jsx";
function App() {
  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

  return (
    <>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route
              path="/event/:id"
              element={
                <Elements stripe={stripePromise}>
                  <EventDetail />
                </Elements>
              }
            />
            <Route path="/profile" element={<ProfileScreen />} />
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />
            <Route
              path="/register"
              element={
                <PublicRoute>
                  <Register />
                </PublicRoute>
              }
            />
            {/* Add other routes here */}
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
