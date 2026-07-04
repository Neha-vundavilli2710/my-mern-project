import "./BMITable.css";

function BMITable() {

  const bmiCategories = [
    {
      color: "#3b82f6",
      title: "Underweight",
      range: "< 18.5",
    },
    {
      color: "#22c55e",
      title: "Normal",
      range: "18.5 - 24.9",
    },
    {
      color: "#f59e0b",
      title: "Overweight",
      range: "25 - 29.9",
    },
    {
      color: "#ef4444",
      title: "Obese",
      range: "30+",
    },
  ];

  return (

    <div className="table-container">

      <h2>BMI Categories</h2>

      <div className="category-list">

        {bmiCategories.map((item, index) => (

          <div className="category-item" key={index}>

            <div className="category-left">

              <span
                className="color-dot"
                style={{ background: item.color }}
              ></span>

              <span>{item.title}</span>

            </div>

            <strong>{item.range}</strong>

          </div>

        ))}

      </div>

    </div>

  );

}

export default BMITable;