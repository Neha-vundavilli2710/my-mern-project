import "./DayCard.css";

import {
  FaPlus,
  FaPen,
  FaTrash,
  FaCalendarDay,
} from "react-icons/fa";

function DayCard({

  day,
  meal,
  openModal,
  deleteMeal,

}) {

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
  });

  const isToday = day === today;

  let status = "Not Planned";

  let statusClass = "status-empty";

  if (meal) {

    const count = [

      meal.breakfast,

      meal.lunch,

      meal.dinner,

    ].filter(Boolean).length;

    if (count === 3) {

      status = "Completed";

      statusClass = "status-complete";

    }

    else if (count > 0) {

      status = "Partial";

      statusClass = "status-partial";

    }

  }

  return (

    <div className={`day-card ${isToday ? "today-card" : ""}`}>

      <div className="day-header">

        <div className="day-title">

          <FaCalendarDay />

          <div>

            <h3>{day}</h3>

            <span className={statusClass}>

              {status}

            </span>

          </div>

        </div>

        <button

          className="plan-btn"

          onClick={() => openModal(day)}

        >

          <FaPlus />

          Plan

        </button>

      </div>

      <div className="meal-section">

        <div className="meal-item">

          <span className="meal-label">

            🍳 Breakfast

          </span>

          <p>{meal?.breakfast || "Not Planned"}</p>

        </div>

        <div className="meal-item">

          <span className="meal-label">

            🍛 Lunch

          </span>

          <p>{meal?.lunch || "Not Planned"}</p>

        </div>

        <div className="meal-item">

          <span className="meal-label">

            🥗 Dinner

          </span>

          <p>{meal?.dinner || "Not Planned"}</p>

        </div>

      </div>

      {meal && (

        <div className="day-actions">

          <button

            className="edit-btn"

            onClick={() => openModal(day)}

          >

            <FaPen />

            Edit

          </button>

          <button

            className="delete-btn"

            onClick={() => deleteMeal(day)}

          >

            <FaTrash />

            Delete

          </button>

        </div>

      )}

    </div>

  );

}

export default DayCard;