import "./HealthTips.css";

import {
  FaCheckCircle,
} from "react-icons/fa";

function HealthTips({ result }) {

  let tips = [

    "Drink 2–3 litres of water",

    "Exercise for at least 30 minutes",

    "Eat a balanced diet",

    "Sleep 7–8 hours daily",

  ];

  if (result) {

    switch (result.category) {

      case "Underweight":

        tips = [

          "Increase healthy calorie intake",

          "Eat more protein-rich foods",

          "Strength training exercises",

          "Get enough sleep",

        ];

        break;

      case "Overweight":

        tips = [

          "Reduce sugar intake",

          "Walk every day",

          "Eat more vegetables",

          "Avoid processed foods",

        ];

        break;

      case "Obese":

        tips = [

          "Consult a healthcare professional",

          "Follow a structured diet",

          "Start light physical activity",

          "Track your progress weekly",

        ];

        break;

      default:

        break;

    }

  }

  return (

    <div className="tips-container">

      <h2>Health Tips</h2>

      <div className="tips-list">

        {

          tips.map((tip, index) => (

            <div className="tip-card" key={index}>

              <FaCheckCircle />

              <span>{tip}</span>

            </div>

          ))

        }

      </div>

    </div>

  );

}

export default HealthTips;