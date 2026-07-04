import { useEffect, useState } from "react";
import "./MealProgress.css";
import { FaCheckCircle, FaClock } from "react-icons/fa";

function MealProgress() {

  const [meals, setMeals] = useState([]);

  useEffect(() => {

    const weeklyMeals =
      JSON.parse(localStorage.getItem("weeklyMeals")) || {};

    const today = new Date().toLocaleDateString("en-US", {
      weekday: "long",
    });

    const todayMeals = weeklyMeals[today];

    if (!todayMeals) {

      setMeals([]);

      return;

    }

    setMeals([
      {
        type: "Breakfast",
        meal: todayMeals.breakfast || "Not Planned",
        status: todayMeals.breakfast ? "Completed" : "Pending",
      },
      {
        type: "Lunch",
        meal: todayMeals.lunch || "Not Planned",
        status: todayMeals.lunch ? "Completed" : "Pending",
      },
      {
        type: "Dinner",
        meal: todayMeals.dinner || "Not Planned",
        status: todayMeals.dinner ? "Completed" : "Pending",
      },
    ]);

  }, []);

  return (

    <div className="meal-progress">

      <h2>Today's Meals</h2>

      {meals.map((meal, index) => (

        <div
          className="meal-row"
          key={index}
        >

          <div>

            <h4>{meal.type}</h4>

            <p>{meal.meal}</p>

          </div>

          {meal.status === "Completed" ? (

            <span className="completed">

              <FaCheckCircle />

              Planned

            </span>

          ) : (

            <span className="pending">

              <FaClock />

              Not Planned

            </span>

          )}

        </div>

      ))}

    </div>

  );

}

export default MealProgress;