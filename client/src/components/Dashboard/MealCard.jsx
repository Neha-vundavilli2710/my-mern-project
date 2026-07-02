import "./MealCard.css";
import { FaPlus } from "react-icons/fa";

function MealCard() {
  return (
    <div className="meal-card">

      <div className="meal-header">
        <h2>🍽 Today's Meals</h2>

        <button className="add-meal-btn">
          <FaPlus />
          Add Meal
        </button>
      </div>

      <div className="meal-list">

        <div className="meal-item">
          <div>
            <h3>Breakfast</h3>
            <p>Oats, Banana & Milk</p>
          </div>

          <span className="meal-status completed">
            Completed
          </span>
        </div>

        <div className="meal-item">
          <div>
            <h3>Lunch</h3>
            <p>Rice, Dal & Chicken Curry</p>
          </div>

          <span className="meal-status pending">
            Pending
          </span>
        </div>

        <div className="meal-item">
          <div>
            <h3>Dinner</h3>
            <p>Vegetable Soup & Salad</p>
          </div>

          <span className="meal-status pending">
            Pending
          </span>
        </div>

      </div>

    </div>
  );
}

export default MealCard;