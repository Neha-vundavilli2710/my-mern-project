import "./StatsCards.css";
import { FaHeartbeat, FaFire, FaTint } from "react-icons/fa";

function StatsCards() {
  return (
    <section className="stats-section">

      {/* BMI */}

      <div className="stat-card">

        <div className="stat-icon bmi">
          <FaHeartbeat />
        </div>

        <div>
          <h4>BMI</h4>
          <h2>22.5</h2>
          <p>Healthy</p>
        </div>

      </div>

      {/* Calories */}

      <div className="stat-card">

        <div className="stat-icon calories">
          <FaFire />
        </div>

        <div>
          <h4>Calories</h4>
          <h2>1850</h2>
          <p>Goal: 2200 kcal</p>
        </div>

      </div>

      {/* Water */}

      <div className="stat-card">

        <div className="stat-icon water">
          <FaTint />
        </div>

        <div>
          <h4>Water Intake</h4>
          <h2>2.5 L</h2>
          <p>Daily Goal Achieved</p>
        </div>

      </div>

    </section>
  );
}

export default StatsCards;