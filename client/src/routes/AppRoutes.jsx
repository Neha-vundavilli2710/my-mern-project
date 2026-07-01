import { Routes, Route } from "react-router-dom";

import Landing from "../pages/Landing/Landing";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Dashboard from "../pages/Dashboard/Dashboard";
import NewPlan from "../pages/Nutrition/NewPlan";
import MyPlans from "../pages/Nutrition/MyPlans";
import Profile from "../pages/Profile/Profile";

import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";

function AppRoutes() {
  return (
    <Routes>

      {/* Public Routes */}

      <Route path="/" element={<Landing />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      {/* Protected Routes */}

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/new-plan"
        element={
          <ProtectedRoute>
            <NewPlan />
          </ProtectedRoute>
        }
      />

      <Route
        path="/my-plans"
        element={
          <ProtectedRoute>
            <MyPlans />
          </ProtectedRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />

    </Routes>
  );
}

export default AppRoutes;