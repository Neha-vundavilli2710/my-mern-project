import "./BMIResult.css";

function BMIResult({ result }) {

  if (!result) {

    return (

      <div className="result-container">

        <h2>Your BMI</h2>

        <div className="bmi-circle empty">
          --
        </div>

        <h3>Calculate your BMI</h3>

        <p>
          Enter your height and weight to see your BMI score.
        </p>

      </div>

    );

  }

  let color = "#22c55e";
  let message = "";

  switch (result.category) {

    case "Underweight":
      color = "#3b82f6";
      message = "You are below the healthy weight range.";
      break;

    case "Normal Weight":
      color = "#22c55e";
      message = "Excellent! Your BMI is within the healthy range.";
      break;

    case "Overweight":
      color = "#f59e0b";
      message = "A balanced diet and regular exercise are recommended.";
      break;

    default:
      color = "#ef4444";
      message = "Consult a healthcare professional for guidance.";
  }

  return (

    <div className="result-container">

      <h2>Your BMI</h2>

      <div
        className="bmi-circle"
        style={{ background: color }}
      >
        {result.bmi}
      </div>

      <span
        className="bmi-badge"
        style={{ background: color }}
      >
        {result.category}
      </span>

      <p className="result-message">

        {message}

      </p>

      <div className="healthy-box">

        <span>Healthy BMI</span>

        <strong>18.5 – 24.9</strong>

      </div>

    </div>

  );

}

export default BMIResult;