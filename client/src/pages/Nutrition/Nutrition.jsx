import { useEffect, useState } from "react";

import API from "../../services/api";

import Sidebar from "../../components/Sidebar/Sidebar";

import NutritionStats from "../../components/Nutrition/NutritionStats";
import NutritionSummary from "../../components/Nutrition/NutritionSummary";
import MealProgress from "../../components/Nutrition/MealProgress";
import NutritionTips from "../../components/Nutrition/NutritionTips";

import "./Nutrition.css";

function Nutrition() {

  const [nutrition, setNutrition] = useState({

    calories: 0,

    protein: 0,

    carbs: 0,

    fat: 0,

  });

  const [todayMeals, setTodayMeals] = useState([]);

  useEffect(() => {

    loadNutrition();

  }, []);

  const loadNutrition = async () => {

    try {

      const res = await API.get("/meals");

      if (res.data.success && res.data.mealPlan) {

        const today = new Date().toLocaleDateString(

          "en-US",

          {

            weekday: "long",

          }

        );

        const meals = res.data.mealPlan[today];

        const mealList = [];

        let calories = 0;

        let protein = 0;

        let carbs = 0;

        let fat = 0;

        if (meals?.breakfast) {

          mealList.push({

            type: "Breakfast",

            meal: meals.breakfast,

            status: "Planned",

          });

          calories += 400;
          protein += 20;
          carbs += 45;
          fat += 10;

        }

        if (meals?.lunch) {

          mealList.push({

            type: "Lunch",

            meal: meals.lunch,

            status: "Planned",

          });

          calories += 700;
          protein += 35;
          carbs += 70;
          fat += 18;

        }

        if (meals?.dinner) {

          mealList.push({

            type: "Dinner",

            meal: meals.dinner,

            status: "Planned",

          });

          calories += 600;
          protein += 30;
          carbs += 55;
          fat += 15;

        }

        setTodayMeals(mealList);

        setNutrition({

          calories,

          protein,

          carbs,

          fat,

        });

      }

    }

    catch (error) {

      console.log(error);

    }

  };

  return (

    <>

      <Sidebar />

      <main className="nutrition-page">

        <div className="nutrition-header">

          <h1>

            🥗 Nutrition Tracker

          </h1>

          <p>

            Monitor your daily nutrition intake.

          </p>

        </div>

        <div className="nutrition-grid">

          <div className="summary-card">

            <NutritionStats nutrition={nutrition} />

          </div>

          <div className="nutrition-card">

            <NutritionSummary nutrition={nutrition} />

          </div>

          <div className="nutrition-card">

            <MealProgress meals={todayMeals} />

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