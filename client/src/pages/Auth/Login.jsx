import "./Login.css";
import loginImg from "../../assets/images/auth/login.png";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

function Login() {

    const [showPassword, setShowPassword] = useState(false);

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
                        Continue your healthy lifestyle journey by accessing
                        your personalized nutrition dashboard and meal plans.
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

                    <form className="login-form">

                        <input
                            type="email"
                            placeholder="Email Address"
                        />

                        <div className="password-box">

                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                            />

                            <span
                                onClick={() =>
                                    setShowPassword(!showPassword)
                                }
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
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

                        <button>
                            Login
                        </button>

                    </form>

                    <p className="register-link">

                        Don't have an account?

                        <Link to="/register">
                            Register
                        </Link>

                    </p>

                </div>

            </div>

        </section>

    );

}

export default Login;