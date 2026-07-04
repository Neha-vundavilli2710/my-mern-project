import { useEffect, useState } from "react";

import "./PlannerModal.css";

function PlannerModal({

  day,

  meal,

  closeModal,

  saveMeal,

}) {

  const [mealData, setMealData] = useState({

    breakfast: "",

    lunch: "",

    dinner: "",

  });

  /* ==========================
      PREFILL WHEN EDITING
  ========================== */

  useEffect(() => {

    if (meal) {

      setMealData({

        breakfast: meal.breakfast || "",

        lunch: meal.lunch || "",

        dinner: meal.dinner || "",

      });

    }

  }, [meal]);

  /* ==========================
      HANDLE CHANGE
  ========================== */

  const handleChange = (e) => {

    setMealData({

      ...mealData,

      [e.target.name]: e.target.value,

    });

  };

  /* ==========================
      SAVE
  ========================== */

  const handleSubmit = (e) => {

    e.preventDefault();

    saveMeal(

      day,

      mealData

    );

  };

  return (

    <div className="planner-overlay">

      <div className="planner-modal">

        <h2>

          {meal ? "Edit Meal Plan" : "Plan Meals"}

        </h2>

        <p className="planner-day">

          {day}

        </p>

        <form onSubmit={handleSubmit}>

          <input

            type="text"

            name="breakfast"

            placeholder="Breakfast"

            value={mealData.breakfast}

            onChange={handleChange}

          />

          <input

            type="text"

            name="lunch"

            placeholder="Lunch"

            value={mealData.lunch}

            onChange={handleChange}

          />

          <input

            type="text"

            name="dinner"

            placeholder="Dinner"

            value={mealData.dinner}

            onChange={handleChange}

          />

          <div className="planner-buttons">

            <button

              type="button"

              onClick={closeModal}

            >

              Cancel

            </button>

            <button

              type="submit"

            >

              {meal ? "Update Plan" : "Save Plan"}

            </button>

          </div>

        </form>

      </div>

    </div>

  );

}

export default PlannerModal;