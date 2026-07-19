import "./NutritionStats.css";

import {
  FaFire,
  FaTint,
} from "react-icons/fa";

function NutritionStats({ nutrition }) {

  const stats = [

    {
      icon: <FaFire />,
      title: "Calories",
      value: nutrition?.calories || 0,
      unit: "kcal",
      goal: "Goal: 2200 kcal",
      color: "#f97316",
    },

    {
      icon: <FaTint />,
      title: "Water Intake",
      value: 3,
      unit: "L",
      goal: "Goal: 3 L",
      color: "#0ea5e9",
    },

  ];

  return (

    <div className="stats-grid">

      {

        stats.map((item, index) => (

          <div
            className="stat-card"
            key={index}
          >

            <div
              className="stat-icon"
              style={{
                background: item.color,
              }}
            >

              {item.icon}

            </div>

            <div className="stat-content">

              <h3>{item.title}</h3>

              <h2>

                {item.value}

                <span>

                  {" "}

                  {item.unit}

                </span>

              </h2>

              <p>{item.goal}</p>

            </div>

          </div>

        ))

      }

    </div>

  );

}

export default NutritionStats;