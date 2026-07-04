import { useEffect, useState } from "react";

import Sidebar from "../../components/Sidebar/Sidebar";

import WelcomeCard from "../../components/Dashboard/WelcomeCard";
import StatsCards from "../../components/Dashboard/StatsCards";
import MealCard from "../../components/Dashboard/MealCard";
import NutritionSummary from "../../components/Dashboard/NutritionSummary";

import "./Dashboard.css";

function Dashboard() {

  const [profile, setProfile] = useState({});
  const [bmiResult, setBmiResult] = useState(null);
  const [meals, setMeals] = useState([]);

  useEffect(() => {

    const savedProfile = localStorage.getItem("profile");

    if (savedProfile) {
      setProfile(JSON.parse(savedProfile));
    }

    const savedBMI = localStorage.getItem("bmiResult");

    if (savedBMI) {
      setBmiResult(JSON.parse(savedBMI));
    }

    const savedMeals = localStorage.getItem("meals");

    if (savedMeals) {
      setMeals(JSON.parse(savedMeals));
    }

  }, []);

  const nutrition = meals.reduce(

    (total, meal) => {

      total.calories += Number(meal.calories) || 0;
      total.protein += Number(meal.protein) || 0;
      total.carbs += Number(meal.carbs) || 0;
      total.fat += Number(meal.fat) || 0;

      return total;

    },

    {

      calories: 0,
      protein: 0,
      carbs: 0,
      fat: 0,

    }

  );

  return (

    <>

      <Sidebar />

      <main className="dashboard">

        <WelcomeCard profile={profile} />

        <StatsCards

          profile={profile}
          bmiResult={bmiResult}

        />

        <div className="dashboard-bottom">

          <MealCard meals={meals} />

          <NutritionSummary nutrition={nutrition} />

        </div>

      </main>

    </>

  );

}

export default Dashboard;