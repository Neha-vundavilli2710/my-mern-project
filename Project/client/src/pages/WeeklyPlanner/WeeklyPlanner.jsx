import { useEffect, useState } from "react";

import API from "../../services/api";

import Sidebar from "../../components/Sidebar/Sidebar";

import WeekGrid from "../../components/WeeklyPlanner/WeekGrid";
import WeeklySummary from "../../components/WeeklyPlanner/WeeklySummary";
import PlannerModal from "../../components/WeeklyPlanner/PlannerModal";

import "./WeeklyPlanner.css";

function WeeklyPlanner() {

  const [showModal, setShowModal] = useState(false);

  const [selectedDay, setSelectedDay] = useState("");

  const [editingMeal, setEditingMeal] = useState(null);

  const [weeklyMeals, setWeeklyMeals] = useState({});

  useEffect(() => {

    loadMeals();

  }, []);

  const loadMeals = async () => {

    try {

      const res = await API.get("/meals");

      if (res.data.success && res.data.mealPlan) {

        const mealPlan = { ...res.data.mealPlan };

        delete mealPlan._id;
        delete mealPlan.userId;
        delete mealPlan.createdAt;
        delete mealPlan.updatedAt;
        delete mealPlan.__v;

        setWeeklyMeals(mealPlan);

      }

    }

    catch (error) {

      alert("Something went wrong.");

    }

  };

  const openModal = (day) => {

    setSelectedDay(day);

    setEditingMeal(

      weeklyMeals[day] || null

    );

    setShowModal(true);

  };

  const closeModal = () => {

    setShowModal(false);

    setEditingMeal(null);

  };

  const saveMeal = async (day, meal) => {

    const updatedMeals = {

      ...weeklyMeals,

      [day]: meal,

    };

    setWeeklyMeals(updatedMeals);

    try {

      await API.post(

        "/meals",

        updatedMeals

      );

    }

    catch (error) {

      alert("Something went wrong.");

    }

    setShowModal(false);

    setEditingMeal(null);

  };

  const deleteMeal = async (day) => {

    const updatedMeals = {

      ...weeklyMeals,

    };

    delete updatedMeals[day];

    setWeeklyMeals(updatedMeals);

    try {

      await API.post(

        "/meals",

        updatedMeals

      );

    }

    catch (error) {

      alert("Something went wrong.");

    }

  };

  return (

    <>

      <Sidebar />

      <main className="weekly-page">

        <div className="weekly-header">

          <h1>🍽 Meal Planner</h1>

          <p>

            Plan your breakfast, lunch and dinner for each day of the week.

          </p>

        </div>

        <div className="weekly-layout">

          <div className="planner-card">

            <WeekGrid

              weeklyMeals={weeklyMeals}

              openModal={openModal}

              deleteMeal={deleteMeal}

            />

          </div>

          <div className="summary-card">

            <WeeklySummary

              weeklyMeals={weeklyMeals}

            />

          </div>

        </div>

        {

          showModal && (

            <PlannerModal

              day={selectedDay}

              meal={editingMeal}

              closeModal={closeModal}

              saveMeal={saveMeal}

            />

          )

        }

      </main>

    </>

  );

}

export default WeeklyPlanner;