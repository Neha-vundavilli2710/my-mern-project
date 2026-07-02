import Sidebar from "../../components/Sidebar/Sidebar";

import WelcomeCard from "../../components/Dashboard/WelcomeCard";
import StatsCards from "../../components/Dashboard/StatsCards";
import MealCard from "../../components/Dashboard/MealCard";
import NutritionSummary from "../../components/Dashboard/NutritionSummary";

import "./Dashboard.css";

function Dashboard() {
  return (
    <>
      <Sidebar />

      <main className="dashboard">

        <WelcomeCard />

        <StatsCards />

        <div className="dashboard-bottom">

          <MealCard />

          <NutritionSummary />

        </div>

      </main>
    </>
  );
}

export default Dashboard;