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

    /* Profile */

    const savedProfile = JSON.parse(
      localStorage.getItem("profile")
    );

    if (savedProfile) {

      setProfile(savedProfile);

    }

    /* BMI */

    const savedBMI = JSON.parse(
      localStorage.getItem("bmiResult")
    );

    if (savedBMI) {

      setBmiResult(savedBMI);

    }

    /* Weekly Meal Planner */

    const weeklyMeals = JSON.parse(
      localStorage.getItem("weeklyMeals")
    ) || {};

    const today = new Date().toLocaleDateString(
      "en-US",
      {
        weekday: "long",
      }
    );

    const todayMeals = weeklyMeals[today];

    if (todayMeals) {

      const dashboardMeals = [];

      if (todayMeals.breakfast) {

        dashboardMeals.push({

          id: 1,

          type: "Breakfast",

          food: todayMeals.breakfast,

          status: "Planned",

          calories: 400,

          protein: 20,

          carbs: 45,

          fat: 10,

        });

      }

      if (todayMeals.lunch) {

        dashboardMeals.push({

          id: 2,

          type: "Lunch",

          food: todayMeals.lunch,

          status: "Planned",

          calories: 700,

          protein: 35,

          carbs: 70,

          fat: 18,

        });

      }

      if (todayMeals.dinner) {

        dashboardMeals.push({

          id: 3,

          type: "Dinner",

          food: todayMeals.dinner,

          status: "Planned",

          calories: 600,

          protein: 30,

          carbs: 55,

          fat: 15,

        });

      }

      setMeals(dashboardMeals);

    }

  }, []);

  const nutrition = meals.reduce(

    (total, meal) => {

      total.calories += meal.calories;

      total.protein += meal.protein;

      total.carbs += meal.carbs;

      total.fat += meal.fat;

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

          <NutritionSummary

            nutrition={nutrition}

          />

        </div>

      </main>

    </>

  );

}

export default Dashboard;