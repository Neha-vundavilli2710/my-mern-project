import "./StatsCards.css";

import {

  FaHeartbeat,

  FaFire,

  FaTint,

} from "react-icons/fa";

function StatsCards({

  profile,

  bmiResult,

}) {

  return (

    <section className="stats-section">

      <div className="stat-card">

        <div className="stat-icon bmi">

          <FaHeartbeat />

        </div>

        <div>

          <h4>BMI</h4>

          <h2>

            {bmiResult?.bmi || "--"}

          </h2>

          <p>

            {bmiResult?.category || "Not Calculated"}

          </p>

        </div>

      </div>

      <div className="stat-card">

        <div className="stat-icon calories">

          <FaFire />

        </div>

        <div>

          <h4>Goal</h4>

          <h2>

            {profile.goal || "--"}

          </h2>

          <p>

            Health Goal

          </p>

        </div>

      </div>

      <div className="stat-card">

        <div className="stat-icon water">

          <FaTint />

        </div>

        <div>

          <h4>Water Goal</h4>

          <h2>

            {profile.waterGoal || "--"} L

          </h2>

          <p>

            Daily Target

          </p>

        </div>

      </div>

    </section>

  );

}

export default StatsCards;