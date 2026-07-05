import "./MealProgress.css";

import {
  FaCheckCircle,
  FaClock,
} from "react-icons/fa";

function MealProgress({ meals }) {

  return (

    <div className="meal-progress">

      <h2>Today's Meals</h2>

      {

        meals.length > 0 ? (

          meals.map((meal, index) => (

            <div
              className="meal-row"
              key={index}
            >

              <div>

                <h4>{meal.type}</h4>

                <p>{meal.meal}</p>

              </div>

              {

                meal.status === "Planned"

                ?

                <span className="completed">

                  <FaCheckCircle />

                  Planned

                </span>

                :

                <span className="pending">

                  <FaClock />

                  Not Planned

                </span>

              }

            </div>

          ))

        )

        :

        <p>No meals planned for today.</p>

      }

    </div>

  );

}

export default MealProgress;