import "./NutritionSummary.css";

function NutritionSummary() {

    const nutrients = [
        { name: "Protein", value: 80 },
        { name: "Carbohydrates", value: 65 },
        { name: "Fat", value: 45 },
        { name: "Fiber", value: 70 }
    ];

    return (

        <div className="nutrition-card">

            <h2>🥗 Nutrition Summary</h2>

            {nutrients.map((item, index) => (

                <div
                    key={index}
                    className="nutrient"
                >

                    <div className="nutrient-top">

                        <span>{item.name}</span>

                        <span>{item.value}%</span>

                    </div>

                    <div className="progress">

                        <div
                            className="progress-fill"
                            style={{ width: `${item.value}%` }}
                        ></div>

                    </div>

                </div>

            ))}

        </div>

    );

}

export default NutritionSummary;