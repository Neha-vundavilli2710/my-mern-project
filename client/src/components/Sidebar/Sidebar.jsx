import "./Sidebar.css";

import {
  FaLeaf,
  FaHome,
  FaHeartbeat,
  FaChartPie,
  FaCalendarAlt,
  FaUser,
  FaSignOutAlt,
  FaBars,
  FaTimes,
  FaAppleAlt,
  FaHistory,
} from "react-icons/fa";

import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    // Later we'll remove JWT token here
    navigate("/login");
  };

  return (
    <>
      {/* Mobile Menu Button */}

      <button
        className="menu-btn"
        onClick={() => setMenuOpen(true)}
      >
        <FaBars />
      </button>

      {/* Overlay */}

      {menuOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* Sidebar */}

      <aside className={`sidebar ${menuOpen ? "show" : ""}`}>

        {/* Close */}

        <button
          className="close-btn"
          onClick={() => setMenuOpen(false)}
        >
          <FaTimes />
        </button>

        {/* Logo */}

        <div className="sidebar-logo">

          <FaLeaf />

          <h2>Nutrition Assistant</h2>

        </div>

        {/* Navigation */}

        <nav className="sidebar-links">

          {/* Dashboard */}

          <NavLink
            to="/dashboard"
            className="nav-item"
            onClick={() => setMenuOpen(false)}
          >
            <FaHome />
            Dashboard
          </NavLink>

          {/* BMI */}

          <NavLink
            to="/bmi"
            className="nav-item"
            onClick={() => setMenuOpen(false)}
          >
            <FaHeartbeat />
            BMI Calculator
          </NavLink>

          {/* Meal Planner */}

          <NavLink
            to="/meal-planner"
            className="nav-item"
            onClick={() => setMenuOpen(false)}
          >
            <FaCalendarAlt />
            Meal Planner
          </NavLink>

          {/* Nutrition */}

          <NavLink
            to="/nutrition"
            className="nav-item"
            onClick={() => setMenuOpen(false)}
          >
            <FaChartPie />
            Nutrition Tracker
          </NavLink>

          {/* Diet Recommendation */}

          <NavLink
            to="/diet-recommendation"
            className="nav-item"
            onClick={() => setMenuOpen(false)}
          >
            <FaAppleAlt />
            Diet Recommendation
          </NavLink>

          {/* History */}

          <NavLink
            to="/history"
            className="nav-item"
            onClick={() => setMenuOpen(false)}
          >
            <FaHistory />
            History
          </NavLink>

          {/* Profile */}

          <NavLink
            to="/profile"
            className="nav-item"
            onClick={() => setMenuOpen(false)}
          >
            <FaUser />
            Profile
          </NavLink>

        </nav>

        {/* Logout */}

        <div className="sidebar-footer">

          <button
            className="logout-btn"
            onClick={handleLogout}
          >
            <FaSignOutAlt />
            Logout
          </button>

        </div>

      </aside>
    </>
  );
}

export default Sidebar;