import { Routes, Route, Navigate } from "react-router-dom";
import LoginSignupForm from "./signupPage/signup";
import Home from "./components/Home";
import AdminDashboard from "./components/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import { SmoothScrollHero } from "./landingPage/landingPage";

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<SmoothScrollHero />} />
      <Route path="/signup" element={<LoginSignupForm />} />
      <Route path="/login" element={<LoginSignupForm />} />
      {/* Protected User Routes */}
      <Route
        path="/home"
        element={
          <ProtectedRoute allowedRoles={["user", "admin"]}>
            <Home />
          </ProtectedRoute>
        }
      />

      {/* Protected Admin Routes */}
      <Route
        path="/admin-dashboard"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

      {/* Catch all route - redirect to login */}
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
