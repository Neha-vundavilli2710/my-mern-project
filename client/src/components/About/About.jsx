import "./About.css";

import aboutImage from "../../assets/images/about/about.png";

import {
  FaCheckCircle
} from "react-icons/fa";

function About() {

  return (

    <section className="about" id="about">

      <div className="about-image">

        <img
          src={aboutImage}
          alt="Nutrition Assistant"
        />

      </div>

      <div className="about-content">

        <span className="about-tag">

          About Us

        </span>

        <h2>
            Healthy Living Starts
            <br />
            With <span>Smart Nutrition</span>
        </h2>

        <p>

          Nutrition Assistant is a web application designed to help users
          maintain a healthy lifestyle by providing personalized nutrition
          recommendations based on age, height, weight, BMI and health goals.

        </p>

        <div className="about-list">

          <div>

            <FaCheckCircle />

            <span>Personalized Nutrition Plans</span>

          </div>

          <div>

            <FaCheckCircle />

            <span>Healthy Meal Planning</span>

          </div>

          <div>

            <FaCheckCircle />

            <span>Easy Progress Tracking</span>

          </div>

        </div>

      </div>

    </section>

  );

}

export default About;