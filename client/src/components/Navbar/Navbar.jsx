import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">

      <div className="logo">
        🌿
        <span>Nutrition Assistant</span>
      </div>

      <nav>

        <Link to="/">Home</Link>

        <a href="#features">Features</a>

        <a href="#about">About</a>

        <a href="#contact">Contact</a>

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