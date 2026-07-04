import "./NutritionSummary.css";

function NutritionSummary({

  nutrition,

}) {

  const nutrients=[

    {

      name:"Protein",

      value:nutrition.protein,

      goal:100,

      unit:"g",

    },

    {

      name:"Carbohydrates",

      value:nutrition.carbs,

      goal:250,

      unit:"g",

    },

    {

      name:"Fat",

      value:nutrition.fat,

      goal:70,

      unit:"g",

    },

    {

      name:"Calories",

      value:nutrition.calories,

      goal:2200,

      unit:" kcal",

    }

  ];

  return(

    <div className="nutrition-card">

      <h2>

        🥗 Nutrition Summary

      </h2>

      {

        nutrients.map((item,index)=>{

          const percentage=Math.min(

            Math.round(

              item.value/item.goal*100

            ),

            100

          );

          return(

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

                  {item.unit}

                </span>

              </div>

              <div className="progress">

                <div

                  className="progress-fill"

                  style={{

                    width:`${percentage}%`

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