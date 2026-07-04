import "./NutritionSummary.css";

function NutritionSummary() {

  const nutrients = [

    {
      name: "Protein",
      value: 90,
      goal: 120,
      color: "#22c55e",
    },

    {
      name: "Carbohydrates",
      value: 180,
      goal: 250,
      color: "#3b82f6",
    },

    {
      name: "Fat",
      value: 45,
      goal: 70,
      color: "#f59e0b",
    },

    {
      name: "Fiber",
      value: 22,
      goal: 30,
      color: "#8b5cf6",
    },

  ];

  return (

    <div className="nutrition-summary">

      <h2>Nutrition Summary</h2>

      {

        nutrients.map((item, index) => {

          const percentage = Math.min(
            (item.value / item.goal) * 100,
            100
          );

          return (

            <div
              className="nutrition-item"
              key={index}
            >

              <div className="nutrition-header">

                <span>{item.name}</span>

                <span>

                  {item.value}g / {item.goal}g

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