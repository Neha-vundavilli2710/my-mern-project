import { Link, useLocation, useNavigate } from "react-router-dom";

import "./Navbar.css";

function Navbar() {

  const location = useLocation();
  const navigate = useNavigate();

  const handleSectionNavigation = (sectionId) => {

    if (location.pathname !== "/") {

      navigate("/");

      setTimeout(() => {

        window.scrollTo({
          top: 0,
          behavior: "auto",
        });

        document
          .getElementById(sectionId)
          ?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });

      }, 200);

    }

    else {

      document
        .getElementById(sectionId)
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

    }

  };

  return (

    <header className="navbar">

      <div
        className="logo"
        onClick={() => handleSectionNavigation("home")}
      >
        🌿
        <span>Nutrition Assistant</span>
      </div>

      <nav>

        <button
          className="nav-link"
          onClick={() => handleSectionNavigation("home")}
        >
          Home
        </button>

        <button
          className="nav-link"
          onClick={() => handleSectionNavigation("features")}
        >
          Features
        </button>

        <button
          className="nav-link"
          onClick={() => handleSectionNavigation("about")}
        >
          About
        </button>

        <button
          className="nav-link"
          onClick={() => handleSectionNavigation("contact")}
        >
          Contact
        </button>

      </nav>

      <div className="nav-buttons">

        <Link
          to="/login"
          className="login-btn"
        >
          Login
        </Link>

        <Link
          to="/register"
          className="register-btn"
        >
          Register
        </Link>

      </div>

    </header>

  );

}

export default Navbar;