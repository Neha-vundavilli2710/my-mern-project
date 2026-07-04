import { Link, useLocation, useNavigate } from "react-router-dom";

import "./Navbar.css";

function Navbar() {

  const location = useLocation();

  const navigate = useNavigate();

  const handleSectionNavigation = (sectionId) => {

    if (location.pathname !== "/") {

      navigate("/");

      setTimeout(() => {

        document

          .getElementById(sectionId)

          ?.scrollIntoView({

            behavior: "smooth",

          });

      }, 100);

    }

    else {

      document

        .getElementById(sectionId)

        ?.scrollIntoView({

          behavior: "smooth",

        });

    }

  };

  return (

    <header className="navbar">

      <div

        className="logo"

        onClick={() => handleSectionNavigation("home")}

        style={{ cursor: "pointer" }}

      >

        🌿

        <span>

          Nutrition Assistant

        </span>

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

        <Link className="login-btn" to="/login">

          Login

        </Link>

        <Link className="register-btn" to="/register">

          Register

        </Link>

      </div>

    </header>

  );

}

export default Navbar;