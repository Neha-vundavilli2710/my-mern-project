import "./MealCard.css";

import { FaPlus } from "react-icons/fa";

function MealCard({ meals }) {

  return (

    <div className="meal-card">

      <div className="meal-header">

        <h2>🍽 Today's Meals</h2>

        

      </div>

      <div className="meal-list">

        {

          meals.length === 0

          ?

          <p>

            No meals planned.

          </p>

          :

          meals.map((meal)=>(

            <div

              className="meal-item"

              key={meal.id}

            >

              <div>

                <h3>{meal.type}</h3>

                <p>{meal.food}</p>

              </div>

              <span

                className={`meal-status ${meal.status.toLowerCase()}`}

              >

                {meal.status}

              </span>

            </div>

          ))

        }

      </div>

    </div>

  );

}

export default MealCard;