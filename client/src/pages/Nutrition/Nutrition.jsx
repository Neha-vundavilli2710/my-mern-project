import Sidebar from "../../components/Sidebar/Sidebar";

import NutritionStats from "../../components/Nutrition/NutritionStats";
import NutritionSummary from "../../components/Nutrition/NutritionSummary";
import MealProgress from "../../components/Nutrition/MealProgress";
import NutritionTips from "../../components/Nutrition/NutritionTips";

import "./Nutrition.css";

function Nutrition() {
  return (
    <>
      <Sidebar />

      <main className="nutrition-page">

        <div className="nutrition-header">

          <h1>🥗 Nutrition Tracker</h1>

          <p>
            Monitor your daily nutrition intake and build healthy eating habits.
          </p>

        </div>

        <div className="nutrition-grid">

          <div className="summary-card">
            <NutritionStats />
        </div>

        <div className="nutrition-card">
            <NutritionSummary />
        </div>

          <div className="nutrition-card">
            <MealProgress />
          </div>

          <div className="nutrition-card">
            <NutritionTips />
          </div>

        </div>

      </main>

    </>
  );
}

export default Nutrition;