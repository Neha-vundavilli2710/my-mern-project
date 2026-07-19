import { useEffect, useState } from "react";

import API from "../../services/api";

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

    loadDashboard();

  }, []);

  const loadDashboard = async () => {

    try {

      /* Profile */

      const profileRes = await API.get("/profile");

      if (profileRes.data.success) {

        setProfile(profileRes.data.profile);

      }

      /* BMI */

      const bmiRes = await API.get("/bmi");

      if (bmiRes.data.success) {

        setBmiResult(bmiRes.data.bmi);

      }

      /* Meal Plan */

      const mealRes = await API.get("/meals");

      if (mealRes.data.success) {

        const mealPlan = mealRes.data.mealPlan || {};

        const today = new Date().toLocaleDateString("en-US", {

          weekday: "long",

        });

        const todayMeal = mealPlan[today];

        const dashboardMeals = [];

        if (todayMeal?.breakfast) {

          dashboardMeals.push({

            id: 1,

            type: "Breakfast",

            food: todayMeal.breakfast,

            status: "Planned",

            calories: 400,

            protein: 20,

            carbs: 45,

            fat: 10,

          });

        }

        if (todayMeal?.lunch) {

          dashboardMeals.push({

            id: 2,

            type: "Lunch",

            food: todayMeal.lunch,

            status: "Planned",

            calories: 700,

            protein: 35,

            carbs: 70,

            fat: 18,

          });

        }

        if (todayMeal?.dinner) {

          dashboardMeals.push({

            id: 3,

            type: "Dinner",

            food: todayMeal.dinner,

            status: "Planned",

            calories: 600,

            protein: 30,

            carbs: 55,

            fat: 15,

          });

        }

        setMeals(dashboardMeals);

      }

    }

    catch (error) {

      alert("Something went wrong.");

    }

  };

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

          <NutritionSummary nutrition={nutrition} />

        </div>

      </main>

    </>

  );

}

export default Dashboard;