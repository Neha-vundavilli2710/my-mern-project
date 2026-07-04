import { useState, useEffect } from "react";

import Sidebar from "../../components/Sidebar/Sidebar";
import SearchBar from "../../components/Nutrition/SearchBar";
import MealList from "../../components/Nutrition/MealList";
import MealModal from "../../components/Nutrition/MealModal";

import "./MealPlanner.css";

function MealPlanner() {

  const [showModal, setShowModal] = useState(false);

  const [editingMeal, setEditingMeal] = useState(null);

  const [search, setSearch] = useState("");

  /* ==========================
      LOAD FROM LOCAL STORAGE
  ========================== */

  const [meals, setMeals] = useState(() => {

    const savedMeals = localStorage.getItem("meals");

    if (savedMeals) {

      return JSON.parse(savedMeals);

    }

    return [

      {
        id: 1,
        type: "Breakfast",
        food: "Oats, Banana & Milk",
        calories: 420,
        protein: 18,
        carbs: 55,
        fat: 9,
        time: "08:00",
        status: "Completed",
      },

      {
        id: 2,
        type: "Lunch",
        food: "Rice, Dal & Chicken Curry",
        calories: 720,
        protein: 42,
        carbs: 72,
        fat: 18,
        time: "13:00",
        status: "Pending",
      },

      {
        id: 3,
        type: "Dinner",
        food: "Vegetable Soup & Salad",
        calories: 350,
        protein: 20,
        carbs: 28,
        fat: 8,
        time: "20:00",
        status: "Pending",
      },

    ];

  });

  /* ==========================
      SAVE TO LOCAL STORAGE
  ========================== */

  useEffect(() => {

    localStorage.setItem(

      "meals",

      JSON.stringify(meals)

    );

  }, [meals]);

  /* ==========================
      ADD MEAL
  ========================== */

  const addMeal = (meal) => {

    const newMeal = {

      id: Date.now(),

      ...meal,

      status: "Pending",

    };

    setMeals([...meals, newMeal]);

    setShowModal(false);

  };

  /* ==========================
      DELETE MEAL
  ========================== */

  const deleteMeal = (id) => {

    setMeals(

      meals.filter((meal) => meal.id !== id)

    );

  };

  /* ==========================
      OPEN EDIT MODAL
  ========================== */

  const editMeal = (meal) => {

    setEditingMeal(meal);

    setShowModal(true);

  };

  /* ==========================
      UPDATE MEAL
  ========================== */

  const updateMeal = (updatedMeal) => {

    const updatedMeals = meals.map((meal) =>

      meal.id === updatedMeal.id

        ? updatedMeal

        : meal

    );

    setMeals(updatedMeals);

    setEditingMeal(null);

    setShowModal(false);

  };

  /* ==========================
      CLOSE MODAL
  ========================== */

  const closeModal = () => {

    setShowModal(false);

    setEditingMeal(null);

  };

  /* ==========================
      SEARCH
  ========================== */

  const filteredMeals = meals.filter((meal) => {

    const keyword = search.toLowerCase();

    return (

      meal.type.toLowerCase().includes(keyword) ||

      meal.food.toLowerCase().includes(keyword)

    );

  });

  return (

    <>

      <Sidebar />

      <main className="meal-planner-page">

        <div className="meal-header">

          <div>

            <h1>🍽 Meal Planner</h1>

            <p>

              Organize your daily meals and track your nutrition.

            </p>

          </div>

          <button

            className="add-btn"

            onClick={() => {

              setEditingMeal(null);

              setShowModal(true);

            }}

          >

            + Add Meal

          </button>

        </div>

        <SearchBar

          search={search}

          setSearch={setSearch}

        />

        <MealList

          meals={filteredMeals}

          deleteMeal={deleteMeal}

          editMeal={editMeal}

        />

        {

          showModal && (

            <MealModal

              closeModal={closeModal}

              addMeal={addMeal}

              updateMeal={updateMeal}

              editingMeal={editingMeal}

            />

          )

        }

      </main>

    </>

  );

}

export default MealPlanner;