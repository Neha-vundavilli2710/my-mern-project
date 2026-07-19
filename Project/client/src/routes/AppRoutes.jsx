import { Routes, Route } from "react-router-dom";

import Landing from "../pages/Landing/Landing";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";

import Dashboard from "../pages/Dashboard/Dashboard";
import BMI from "../pages/BMI/BMI";
import Nutrition from "../pages/Nutrition/Nutrition";
import WeeklyPlanner from "../pages/WeeklyPlanner/WeeklyPlanner";
import Profile from "../pages/Profile/Profile";
import DietRecommendation from "../pages/DietRecommendation/DietRecommendation";
import History from "../pages/History/History";
import Admin from "../pages/Admin/Admin";

function AppRoutes() {

  return (

    <Routes>

      {/* Public Routes */}

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

      {/* Application Routes */}

      <Route
        path="/dashboard"
        element={<Dashboard />}
      />

      <Route
        path="/bmi"
        element={<BMI />}
      />

      <Route
        path="/nutrition"
        element={<Nutrition />}
      />

      <Route
        path="/meal-planner"
        element={<WeeklyPlanner />}
      />

      <Route
        path="/profile"
        element={<Profile />}
      />

      <Route
        path="/diet-recommendation"
        element={<DietRecommendation />}
      />

      <Route
        path="/history"
        element={<History />}
      />

      <Route
        path="/admin"
        element={<Admin />}
      />

      {/* 404 */}

      <Route
        path="*"
        element={<h1>404 - Page Not Found</h1>}
      />

    </Routes>

  );

}

export default AppRoutes;