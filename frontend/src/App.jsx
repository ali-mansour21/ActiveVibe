import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { AuthProvider } from "./routes/AuthContext";
import PublicRoute from "./routes/components/PublicRoute.jsx";
import Auth from "./auth/index.jsx";
import Home from "./pages/Home/index.jsx";
import Events from "./pages/Events/index.jsx";
import ProtectedRoute from "./routes/components/ProtectedRoute.jsx";
import EventDetail from "./components/EventDetail.jsx";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProfileScreen from "./components/ProfileScreen.jsx";
import AdminDashboard from "./pages/Admin/index.jsx";
import AdminLayout from "./pages/Admin/components/Layout.jsx";
import AdminCategory from "./pages/Admin/components/categories/index.jsx";
import AdminGuide from "./pages/Admin/components/guides/index.jsx";
import AdminEvents from "./pages/Admin/components/events/index.jsx";
import EventForm from "./pages/Admin/components/events/components/EventForm.jsx";
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
              path="/auth"
              element={
                <PublicRoute>
                  <Auth />
                </PublicRoute>
              }
            />
            <Route element={<AdminLayout />}>
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/admin/categories" element={<AdminCategory />} />
              <Route path="/admin/guides" element={<AdminGuide />} />
              <Route path="/admin/events" element={<AdminEvents />} />
              <Route path="/add-event" element={<EventForm />} />
              {/* Add other admin routes here */}
            </Route>
            {/* Add other routes here */}
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
