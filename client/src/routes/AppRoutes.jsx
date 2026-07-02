import { Routes, Route } from "react-router-dom";

import Landing from "../pages/Landing/Landing";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";

import Dashboard from "../pages/Dashboard/Dashboard";
import MealPlanner from "../pages/MealPlanner/MealPlanner";
import BMI from "../pages/BMI/BMI";
import Nutrition from "../pages/Nutrition/Nutrition";
import WeeklyPlanner from "../pages/WeeklyPlanner/WeeklyPlanner";
import Profile from "../pages/Profile/Profile";

import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";

function AppRoutes() {
  return (
    <Routes>

      {/* ---------------- Public Routes ---------------- */}

      <Route
        path="/"
        element={<Landing />}
      />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />

      {/* ---------------- Protected Routes ---------------- */}

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/meal-planner"
        element={
          <ProtectedRoute>
            <MealPlanner />
          </ProtectedRoute>
        }
      />

      <Route
        path="/bmi"
        element={
          <ProtectedRoute>
            <BMI />
          </ProtectedRoute>
        }
      />

      <Route
        path="/nutrition"
        element={
          <ProtectedRoute>
            <Nutrition />
          </ProtectedRoute>
        }
      />

      <Route
        path="/weekly-planner"
        element={
          <ProtectedRoute>
            <WeeklyPlanner />
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

      {/* ---------------- 404 ---------------- */}

      <Route
        path="*"
        element={<h1>404 - Page Not Found</h1>}
      />

    </Routes>
  );
}

export default AppRoutes;