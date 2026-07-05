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

      /* User */

      const user = JSON.parse(

        localStorage.getItem("user")

      );

      /* Profile */

      const profileRes = await API.get("/profile");

      if (profileRes.data.success) {

        setProfile({

          ...profileRes.data.profile,

          name: user?.fullName,

          email: user?.email,

        });

      }

      /* BMI */

      const bmiRes = await API.get("/bmi");

      if (

        bmiRes.data.success &&

        bmiRes.data.bmi

      ) {

        setBmiResult({

          bmi: bmiRes.data.bmi.bmi,

          category: bmiRes.data.bmi.category,

        });

      }

      /* Meal Planner */

      const mealRes = await API.get("/meals");

      if (

        mealRes.data.success &&

        mealRes.data.mealPlan

      ) {

        const today = new Date().toLocaleDateString(

          "en-US",

          {

            weekday: "long",

          }

        );

        const todayMeals = mealRes.data.mealPlan[today];

        const dashboardMeals = [];

        if (todayMeals?.breakfast) {

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

        if (todayMeals?.lunch) {

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

        if (todayMeals?.dinner) {

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

    }

    catch (error) {

      console.log(error);

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

          <NutritionSummary

            nutrition={nutrition}

          />

        </div>

      </main>

    </>

  );

}

export default Dashboard;