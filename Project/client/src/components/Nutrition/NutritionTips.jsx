import "./NutritionTips.css";

import {
  FaCheckCircle,
  FaTint,
  FaAppleAlt,
  FaDrumstickBite,
  FaWalking,
} from "react-icons/fa";

function NutritionTips() {

  const tips = [

    {
      icon: <FaTint />,
      text: "Drink 2–3 litres of water daily",
    },

    {
      icon: <FaDrumstickBite />,
      text: "Include protein in every meal",
    },

    {
      icon: <FaAppleAlt />,
      text: "Eat fresh fruits and vegetables",
    },

    {
      icon: <FaWalking />,
      text: "Exercise for at least 30 minutes",
    },

  ];

  return (

    <div className="nutrition-tips">

      <h2>Nutrition Tips</h2>

      {

        tips.map((tip,index)=>(

          <div
            className="tip-card"
            key={index}
          >

            <div className="tip-icon">

              {tip.icon}

            </div>

            <span>

              {tip.text}

            </span>

          </div>

        ))

      }

      <div className="tip-footer">

        <FaCheckCircle />

        Stay consistent to achieve your health goals.

      </div>

    </div>

  );

}

export default NutritionTips;