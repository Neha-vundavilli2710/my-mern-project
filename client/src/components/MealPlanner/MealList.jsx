import "./MealList.css";
import MealItem from "./MealItem";

function MealList({

  meals,

  deleteMeal,

  editMeal,

}) {

  if (meals.length === 0) {

    return (

      <div className="empty-meals">

        <h2>No Meals Found</h2>

        <p>

          No meals match your search.

        </p>

      </div>

    );

  }

  return (

    <div className="meal-list">

      {

        meals.map((meal) => (

          <MealItem

            key={meal.id}

            {...meal}

            deleteMeal={deleteMeal}

            editMeal={editMeal}

          />

        ))

      }

    </div>

  );

}

export default MealList;