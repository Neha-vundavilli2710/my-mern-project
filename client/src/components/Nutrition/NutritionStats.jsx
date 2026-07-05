import { useEffect, useState } from "react";
import "./NutritionStats.css";
import { FaFire, FaTint } from "react-icons/fa";

function NutritionStats() {

  const stats = [

  {

    icon: <FaFire />,

    title: "Calories",

    value: nutrition.calories,

    unit: "kcal",

    goal: "Goal: 2200 kcal",

    color: "#f97316",

  },

  {

    icon: <FaTint />,

    title: "Water Intake",

    value: "3",

    unit: "L",

    goal: "Goal: 3 L",

    color: "#0ea5e9",

  },

];

  useEffect(() => {

    const weeklyMeals =
      JSON.parse(localStorage.getItem("weeklyMeals")) || {};

    const today = new Date().toLocaleDateString("en-US", {
      weekday: "long",
    });

    const todayMeals = weeklyMeals[today];

    let calories = 0;

    if (todayMeals?.breakfast) calories += 400;
    if (todayMeals?.lunch) calories += 700;
    if (todayMeals?.dinner) calories += 600;

    setStats({
      calories,
      water: 2.5,
    });

  }, []);

  return (

    <div className="stats-grid">

      <div className="stat-card">

        <div
          className="stat-icon"
          style={{ background: "#f97316" }}
        >
          <FaFire />
        </div>

        <div className="stat-content">

          <h3>Calories</h3>

          <h2>{stats.calories}<span> kcal</span></h2>

          <p>Goal : 2200 kcal</p>

        </div>

      </div>

      <div className="stat-card">

        <div
          className="stat-icon"
          style={{ background: "#0ea5e9" }}
        >
          <FaTint />
        </div>

        <div className="stat-content">

          <h3>Water Intake</h3>

          <h2>{stats.water}<span> L</span></h2>

          <p>Goal : 3 L</p>

        </div>

      </div>

    </div>

  );

}

export default NutritionStats;