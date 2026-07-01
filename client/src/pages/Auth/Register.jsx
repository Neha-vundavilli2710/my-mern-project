import "./Register.css";
import registerImg from "../../assets/images/auth/register.png";
import { Link } from "react-router-dom";

function Register() {
  return (
    <section className="register">

      <div className="register-content">

        {/* LEFT SIDE */}

        <div className="register-left">

          <div className="register-heading">

            <span className="register-badge">
              🌿 Join Nutrition Assistant
            </span>

            <h1>Create Your Account</h1>

            <p>
              Start your healthy lifestyle today with personalized meal plans,
              BMI tracking and nutrition insights.
            </p>

          </div>

          <div className="register-image">

            <img
              src={registerImg}
              alt="Register"
            />

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="register-card">

          <form className="register-form">

            <input
              type="text"
              placeholder="Full Name"
            />

            <input
              type="email"
              placeholder="Email Address"
            />

            <div className="two-fields">

              <input
                type="password"
                placeholder="Password"
              />

              <input
                type="password"
                placeholder="Confirm Password"
              />

            </div>

            <div className="two-fields">

              <input
                type="number"
                placeholder="Age"
              />

              <select>
                <option>Gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>

            </div>

            <div className="two-fields">

              <input
                type="number"
                placeholder="Height (cm)"
              />

              <input
                type="number"
                placeholder="Weight (kg)"
              />

            </div>

            <select>
              <option>Fitness Goal</option>
              <option>Weight Loss</option>
              <option>Weight Gain</option>
              <option>Maintain Weight</option>
            </select>

            <button type="submit">
              Create Account
            </button>

          </form>

          <p className="login-link">
            Already have an account?
            <Link to="/login"> Login</Link>
          </p>

        </div>

      </div>

    </section>
  );
}

export default Register;