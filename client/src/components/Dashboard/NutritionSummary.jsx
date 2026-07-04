import { useEffect, useState } from "react";

import "./NutritionSummary.css";

function NutritionSummary() {

  const [nutrition, setNutrition] = useState({

    protein: 0,

    carbs: 0,

    fat: 0,

    calories: 0,

  });

  useEffect(() => {

    const savedMeals = JSON.parse(

      localStorage.getItem("meals")

    ) || [];

    let calories = 0;

    let protein = 0;

    let carbs = 0;

    let fat = 0;

    savedMeals.forEach((meal) => {

      calories += Number(meal.calories);

      protein += Number(meal.protein);

      carbs += Number(meal.carbs);

      fat += Number(meal.fat);

    });

    setNutrition({

      calories,

      protein,

      carbs,

      fat,

    });

  }, []);

  const nutrients = [

    {

      name: "Protein",

      value: nutrition.protein,

      goal: 100,

    },

    {

      name: "Carbohydrates",

      value: nutrition.carbs,

      goal: 250,

    },

    {

      name: "Fat",

      value: nutrition.fat,

      goal: 70,

    },

    {

      name: "Calories",

      value: nutrition.calories,

      goal: 2200,

    },

  ];

  return (

    <div className="nutrition-card">

      <h2>

        🥗 Nutrition Summary

      </h2>

      {

        nutrients.map((item, index) => {

          const percentage = Math.min(

            Math.round(

              (item.value / item.goal) * 100

            ),

            100

          );

          return (

            <div

              key={index}

              className="nutrient"

            >

              <div className="nutrient-top">

                <span>

                  {item.name}

                </span>

                <span>

                  {item.value}

                  {

                    item.name === "Calories"

                      ? " kcal"

                      : " g"

                  }

                </span>

              </div>

              <div className="progress">

                <div

                  className="progress-fill"

                  style={{

                    width: `${percentage}%`,

                  }}

                ></div>

              </div>

            </div>

          );

        })

      }

    </div>

  );

}

export default NutritionSummary;