import { Routes, Route, Navigate } from "react-router-dom";
import LoginSignupForm from "./signupPage/signup";
import Home from "./components/Home";

import ProtectedRoute from "./components/ProtectedRoute";
import { SmoothScrollHero } from "./landingPage/landingPage";
import { Sidebar } from "./components/Sidebar";

import Dashboard from "./AdminPages/Dashboard";
import UsersPage from "./AdminPages/UsersPage";
import ComplaintsPage from "./AdminPages/ComplaintsPage";
import MicroLendingPage from "./AdminPages/MicroLendingPage";
import EmergencySOSButton from "./components/EmergencySOSButton";

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
        path="/admin-dashboard/*"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <div className="admin-layout">
              <Sidebar />
              <div className="admin-main-content">
                <div className="admin-page-content">
                  <Routes>
                    <Route index element={<Dashboard />} />
                    <Route path="users" element={<UsersPage />} />
                    <Route path="complaints" element={<ComplaintsPage />} />
                    <Route path="lending" element={<MicroLendingPage />} />
                    <Route path="*" element={<Dashboard />} />
                  </Routes>
                </div>
                <EmergencySOSButton />
              </div>
            </div>
          </ProtectedRoute>
        }
      />

      {/* Catch all route - redirect to login */}
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
