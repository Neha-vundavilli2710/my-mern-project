import { useEffect, useState } from "react";
import "./NutritionSummary.css";

function NutritionSummary() {

  const [nutrients, setNutrients] = useState([]);

  useEffect(() => {

    const weeklyMeals =
      JSON.parse(localStorage.getItem("weeklyMeals")) || {};

    const today = new Date().toLocaleDateString("en-US", {
      weekday: "long",
    });

    const meals = weeklyMeals[today];

    let count = 0;

    if (meals?.breakfast) count++;
    if (meals?.lunch) count++;
    if (meals?.dinner) count++;

    const percentage = Math.round((count / 3) * 100);

    setNutrients([
      {
        name: "Protein",
        value: percentage,
        goal: 100,
        color: "#22c55e",
      },
      {
        name: "Carbohydrates",
        value: percentage,
        goal: 100,
        color: "#3b82f6",
      },
      {
        name: "Fat",
        value: percentage,
        goal: 100,
        color: "#f59e0b",
      },
      {
        name: "Fiber",
        value: percentage,
        goal: 100,
        color: "#8b5cf6",
      },
    ]);

  }, []);

  return (

    <div className="nutrition-summary">

      <h2>Nutrition Summary</h2>

      {nutrients.map((item, index) => (

        <div
          className="nutrition-item"
          key={index}
        >

          <div className="nutrition-header">

            <span>{item.name}</span>

            <span>{item.value}%</span>

          </div>

          <div className="progress-bar">

            <div
              className="progress-fill"
              style={{
                width: `${item.value}%`,
                background: item.color,
              }}
            ></div>

          </div>

        </div>

      ))}

    </div>

  );

}

export default NutritionSummary;