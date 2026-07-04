import "./WeeklySummary.css";

import {
  FaCalendarCheck,
  FaFire,
  FaBullseye,
  FaChartLine,
} from "react-icons/fa6";

import {
  FaTint,
} from "react-icons/fa";

function WeeklySummary({ weeklyMeals }) {

  const plannedDays = Object.keys(weeklyMeals || {}).length;

  const totalMeals = plannedDays * 3;

  const avgCalories =
    plannedDays > 0
      ? 2100 + plannedDays * 20
      : 0;

  const completion = Math.round(
    (plannedDays / 7) * 100
  );

  const stats = [

    {
      icon: <FaCalendarCheck />,
      label: "Planned Days",
      value: `${plannedDays} / 7`,
      color: "#22c55e",
    },

    {
      icon: <FaFire />,
      label: "Avg Calories",
      value:
        plannedDays > 0
          ? `${avgCalories} kcal`
          : "--",
      color: "#f97316",
    },

    {
      icon: <FaTint />,
      label: "Meals Planned",
      value: totalMeals,
      color: "#0ea5e9",
    },

    {
      icon: <FaBullseye />,
      label: "Goal",
      value: "Healthy Diet",
      color: "#8b5cf6",
    },

    {
      icon: <FaChartLine />,
      label: "Completion",
      value: `${completion}%`,
      color: "#22c55e",
    },

  ];

  return (

    <div className="weekly-summary">

      <h2>Weekly Summary</h2>

      {

        stats.map((item, index) => (

          <div

            className="summary-item"

            key={index}

          >

            <div

              className="summary-icon"

              style={{

                background: item.color,

              }}

            >

              {item.icon}

            </div>

            <div className="summary-content">

              <p>{item.label}</p>

              <h3>{item.value}</h3>

            </div>

          </div>

        ))

      }

    </div>

  );

}

export default WeeklySummary;