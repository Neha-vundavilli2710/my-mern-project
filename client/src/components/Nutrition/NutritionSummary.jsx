import "./NutritionSummary.css";

function NutritionSummary({

  nutrition,

}) {

  const nutrients = [

    {

      name: "Protein",

      value: nutrition.protein,

      goal: 100,

      color: "#22c55e",

      unit: "g",

    },

    {

      name: "Carbohydrates",

      value: nutrition.carbs,

      goal: 250,

      color: "#3b82f6",

      unit: "g",

    },

    {

      name: "Fat",

      value: nutrition.fat,

      goal: 70,

      color: "#f59e0b",

      unit: "g",

    },

    {

      name: "Calories",

      value: nutrition.calories,

      goal: 2200,

      color: "#8b5cf6",

      unit: " kcal",

    },

  ];

  return (

    <div className="nutrition-summary">

      <h2>

        Nutrition Summary

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

              className="nutrition-item"

              key={index}

            >

              <div className="nutrition-header">

                <span>

                  {item.name}

                </span>

                <span>

                  {item.value}

                  {item.unit}

                </span>

              </div>

              <div className="progress-bar">

                <div

                  className="progress-fill"

                  style={{

                    width: `${percentage}%`,

                    background: item.color,

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