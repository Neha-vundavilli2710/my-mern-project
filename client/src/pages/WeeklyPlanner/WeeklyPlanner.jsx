import { useEffect, useState } from "react";

import Sidebar from "../../components/Sidebar/Sidebar";

import WeekGrid from "../../components/WeeklyPlanner/WeekGrid";
import WeeklySummary from "../../components/WeeklyPlanner/WeeklySummary";
import PlannerModal from "../../components/WeeklyPlanner/PlannerModal";

import "./WeeklyPlanner.css";

function WeeklyPlanner() {

  const [showModal, setShowModal] = useState(false);

  const [selectedDay, setSelectedDay] = useState("");

  const [editingMeal, setEditingMeal] = useState(null);

  const [weeklyMeals, setWeeklyMeals] = useState(() => {

    const savedMeals = localStorage.getItem("weeklyMeals");

    return savedMeals ? JSON.parse(savedMeals) : {};

  });

  /* ==========================
      SAVE TO LOCAL STORAGE
  ========================== */

  useEffect(() => {

    localStorage.setItem(

      "weeklyMeals",

      JSON.stringify(weeklyMeals)

    );

  }, [weeklyMeals]);

  /* ==========================
      OPEN MODAL
  ========================== */

  const openModal = (day) => {

    setSelectedDay(day);

    setEditingMeal(

      weeklyMeals[day] || null

    );

    setShowModal(true);

  };

  /* ==========================
      CLOSE MODAL
  ========================== */

  const closeModal = () => {

    setShowModal(false);

    setEditingMeal(null);

  };

  /* ==========================
      SAVE MEAL
  ========================== */

  const saveMeal = (day, meal) => {

    setWeeklyMeals({

      ...weeklyMeals,

      [day]: meal,

    });

    setShowModal(false);

    setEditingMeal(null);

  };

  /* ==========================
      DELETE MEAL
  ========================== */

  const deleteMeal = (day) => {

    const updatedMeals = {

      ...weeklyMeals,

    };

    delete updatedMeals[day];

    setWeeklyMeals(updatedMeals);

  };

  return (

    <>

      <Sidebar />

      <main className="weekly-page">

        <div className="weekly-header">

          <h1>📅 Weekly Meal Planner</h1>

          <p>

            Organize your meals for the week and maintain a balanced diet.

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