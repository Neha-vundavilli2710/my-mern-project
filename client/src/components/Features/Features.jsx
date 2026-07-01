import "./Features.css";

import FeatureCard from "./FeatureCard";

import {
  FaUtensils,
  FaChartLine,
  FaFire,
  FaRobot,
  FaCalendarAlt,
  FaUserShield,
} from "react-icons/fa";

function Features() {

  const features = [

    {
      icon: <FaUtensils />,
      title: "Personalized Meal Plans",
      description:
        "Get customized meal plans based on your BMI, activity level and health goals.",
    },

    {
      icon: <FaChartLine />,
      title: "Nutrition Tracking",
      description:
        "Track calories, proteins, carbohydrates and fats with ease.",
    },

    {
      icon: <FaFire />,
      title: "BMI & Calories",
      description:
        "Automatically calculate BMI and daily calorie requirements.",
    },

    {
      icon: <FaRobot />,
      title: "Smart Diet Suggestions",
      description:
        "Receive intelligent meal recommendations based on your profile.",
    },

    {
      icon: <FaCalendarAlt />,
      title: "Weekly Planner",
      description:
        "Plan your weekly breakfast, lunch and dinner effortlessly.",
    },

    {
      icon: <FaUserShield />,
      title: "Secure Accounts",
      description:
        "JWT protected authentication keeps your information secure.",
    },

  ];

  return (

    <section className="features" id="features">

      <div className="features-heading">

        <h2>

          Why Choose <span>Nutrition Assistant?</span>

        </h2>

        <p>

          Smart tools designed to simplify healthy eating and improve your lifestyle.

        </p>

      </div>

      <div className="features-grid">

        {features.map((feature, index) => (

          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />

        ))}

      </div>

    </section>

  );
}

export default Features;