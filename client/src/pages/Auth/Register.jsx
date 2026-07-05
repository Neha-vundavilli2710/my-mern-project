import "./Register.css";
import registerImg from "../../assets/images/auth/register.png";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import API from "../../services/api";

function Register() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({

    fullName: "",

    email: "",

    password: "",

    confirmPassword: "",

  });

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value,

    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {

      alert("Passwords do not match");

      return;

    }

    try {

      const res = await API.post(

        "/auth/register",

        {

          fullName: formData.fullName,

          email: formData.email,

          password: formData.password,

        }

      );

      alert(res.data.message);

      navigate("/login");

    }

    catch (error) {

      alert(

        error.response?.data?.message ||

        "Registration Failed"

      );

    }

  };

  return (

    <section className="register">

      <div className="register-content">

        <div className="register-left">

          <div className="register-heading">

            <span className="register-badge">

              🌿 Join Nutrition Assistant

            </span>

            <h1>Create Your Account</h1>

            <p>

              Start your healthy lifestyle today.

            </p>

          </div>

          <div className="register-image">

            <img

              src={registerImg}

              alt="Register"

            />

          </div>

        </div>

        <div className="register-card">

          <form

            className="register-form"

            onSubmit={handleSubmit}

          >

            <input

              type="text"

              name="fullName"

              placeholder="Full Name"

              value={formData.fullName}

              onChange={handleChange}

              required

            />

            <input

              type="email"

              name="email"

              placeholder="Email Address"

              value={formData.email}

              onChange={handleChange}

              required

            />

            <div className="two-fields">

              <input

                type="password"

                name="password"

                placeholder="Password"

                value={formData.password}

                onChange={handleChange}

                required

              />

              <input

                type="password"

                name="confirmPassword"

                placeholder="Confirm Password"

                value={formData.confirmPassword}

                onChange={handleChange}

                required

              />

            </div>

            <button type="submit">

              Create Account

            </button>

          </form>

          <p className="login-link">

            Already have an account?

            <Link to="/login">

              {" "}Login

            </Link>

          </p>

        </div>

      </div>

    </section>

  );

}

export default Register;