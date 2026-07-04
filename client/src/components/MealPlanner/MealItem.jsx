import "./MealItem.css";

import {
  FaClock,
  FaFire,
  FaPen,
  FaTrash,
} from "react-icons/fa";

function MealItem({

  id,

  type,
  food,

  calories,
  protein,
  carbs,
  fat,

  time,
  status,

  deleteMeal,
  editMeal,

}) {

  return (

    <div className="meal-item-card">

      {/* ==========================
          HEADER
      ========================== */}

      <div className="meal-top">

        <div>

          <h2>{type}</h2>

          <p>{food}</p>

        </div>

        <span className={`status ${status.toLowerCase()}`}>

          {status}

        </span>

      </div>

      {/* ==========================
          NUTRITION INFO
      ========================== */}

      <div className="meal-info">

        <span>

          <FaFire />

          {calories} kcal

        </span>

        <span>

          🍗 {protein} g Protein

        </span>

        <span>

          🍚 {carbs} g Carbs

        </span>

        <span>

          🥑 {fat} g Fat

        </span>

      </div>

      {/* ==========================
          FOOTER
      ========================== */}

      <div className="meal-footer">

        <div className="meal-time">

          <FaClock />

          <span>{time}</span>

        </div>

        <div className="meal-actions">

          {/* Edit */}

          <button

            className="edit-btn"

            onClick={() =>
              editMeal({

                id,

                type,

                food,

                calories,

                protein,

                carbs,

                fat,

                time,

                status,

              })
            }

          >

            <FaPen />

          </button>

          {/* Delete */}

          <button

            className="delete-btn"

            onClick={() => deleteMeal(id)}

          >

            <FaTrash />

          </button>

        </div>

      </div>

    </div>

  );

}

export default MealItem;