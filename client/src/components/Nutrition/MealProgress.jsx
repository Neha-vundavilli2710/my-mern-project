import "./MealProgress.css";

import {
  FaCheckCircle,
  FaClock,
} from "react-icons/fa";

function MealProgress() {

  const meals = [

    {
      type: "Breakfast",
      meal: "Oats, Banana & Milk",
      status: "Completed",
    },

    {
      type: "Lunch",
      meal: "Rice, Dal & Chicken",
      status: "Pending",
    },

    {
      type: "Snack",
      meal: "Mixed Fruits",
      status: "Pending",
    },

    {
      type: "Dinner",
      meal: "Vegetable Soup",
      status: "Pending",
    },

  ];

  return (

    <div className="meal-progress">

      <h2>Today's Meals</h2>

      {

        meals.map((meal,index)=>(

          <div
            className="meal-row"
            key={index}
          >

            <div>

              <h4>{meal.type}</h4>

              <p>{meal.meal}</p>

            </div>

            {

              meal.status==="Completed"

              ?

              <span className="completed">

                <FaCheckCircle />

                Completed

              </span>

              :

              <span className="pending">

                <FaClock />

                Pending

              </span>

            }

          </div>

        ))

      }

    </div>

  );

}

export default MealProgress;