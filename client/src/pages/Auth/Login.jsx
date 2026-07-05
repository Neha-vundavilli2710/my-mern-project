import "./Login.css";
import loginImg from "../../assets/images/auth/login.png";

import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

import API from "../../services/api";

function Login() {

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({

    email: "",

    password: "",

  });

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value,

    });

  };

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      const res = await API.post(

        "/auth/login",

        formData

      );

      localStorage.setItem(

        "token",

        res.data.token

      );

      localStorage.setItem(

        "user",

        JSON.stringify(res.data.user)

      );

      alert(res.data.message);

      navigate("/dashboard");

    }

    catch (error) {

      alert(

        error.response?.data?.message ||

        "Login Failed"

      );

    }

  };

  return (

    <section className="login">

      <div className="login-content">

        {/* LEFT */}

        <div className="login-left">

          <span className="login-badge">

            🌿 Welcome Back

          </span>

          <h1>Login To Your Account</h1>

          <p>

            Continue your healthy lifestyle journey by accessing your personalized dashboard.

          </p>

          <div className="login-image">

            <img

              src={loginImg}

              alt="Login"

            />

          </div>

        </div>

        {/* RIGHT */}

        <div className="login-card">

          <form

            className="login-form"

            onSubmit={handleLogin}

          >

            <input

              type="email"

              name="email"

              placeholder="Email Address"

              value={formData.email}

              onChange={handleChange}

              required

            />

            <div className="password-box">

              <input

                type={showPassword ? "text" : "password"}

                name="password"

                placeholder="Password"

                value={formData.password}

                onChange={handleChange}

                required

              />

              <span

                onClick={() =>

                  setShowPassword(!showPassword)

                }

              >

                {

                  showPassword

                    ? <FaEyeSlash />

                    : <FaEye />

                }

              </span>

            </div>

            <div className="login-options">

              <label>

                <input type="checkbox" />

                Remember Me

              </label>

              <Link to="#">

                Forgot Password?

              </Link>

            </div>

            <button type="submit">

              Login

            </button>

          </form>

          <p className="register-link">

            Don't have an account?

            <Link to="/register">

              {" "}Register

            </Link>

          </p>

        </div>

      </div>

    </section>

  );

}

export default Login;