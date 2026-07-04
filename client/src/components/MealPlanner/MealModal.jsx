import { useState, useEffect } from "react";

import "./MealModal.css";

function MealModal({

  closeModal,

  addMeal,

  updateMeal,

  editingMeal,

}) {

  const [formData, setFormData] = useState({

    id: "",

    type: "Breakfast",

    food: "",

    calories: "",

    protein: "",

    carbs: "",

    fat: "",

    time: "",

  });

  /* ==========================
      LOAD DATA FOR EDIT
  ========================== */

  useEffect(() => {

    if (editingMeal) {

      setFormData(editingMeal);

    }

  }, [editingMeal]);

  /* ==========================
      HANDLE INPUT CHANGE
  ========================== */

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData((prev) => ({

      ...prev,

      [name]: value,

    }));

  };

  /* ==========================
      HANDLE SUBMIT
  ========================== */

  const handleSubmit = (e) => {

    e.preventDefault();

    if (editingMeal) {

      updateMeal({

        ...formData,

        status: editingMeal.status,

      });

    }

    else {

      addMeal(formData);

    }

  };

  return (

    <div className="modal-overlay">

      <div className="meal-modal">

        {/* ==========================
            HEADER
        ========================== */}

        <div className="modal-header">

          <h2>

            {editingMeal ? "Edit Meal" : "Add New Meal"}

          </h2>

          <button

            className="close-btn"

            onClick={closeModal}

          >

            ✕

          </button>

        </div>

        {/* ==========================
            FORM
        ========================== */}

        <form

          className="meal-form"

          onSubmit={handleSubmit}

        >

          {/* Meal Type */}

          <div className="form-group">

            <label>Meal Type</label>

            <select

              name="type"

              value={formData.type}

              onChange={handleChange}

            >

              <option>Breakfast</option>

              <option>Lunch</option>

              <option>Dinner</option>

              <option>Snack</option>

            </select>

          </div>

          {/* Meal Name */}

          <div className="form-group">

            <label>Meal Name</label>

            <input

              type="text"

              name="food"

              placeholder="Enter Meal Name"

              value={formData.food}

              onChange={handleChange}

              required

            />

          </div>

          {/* Calories & Protein */}

          <div className="two-fields">

            <div className="form-group">

              <label>Calories</label>

              <input

                type="number"

                name="calories"

                value={formData.calories}

                onChange={handleChange}

                required

              />

            </div>

            <div className="form-group">

              <label>Protein (g)</label>

              <input

                type="number"

                name="protein"

                value={formData.protein}

                onChange={handleChange}

                required

              />

            </div>

          </div>

          {/* Carbs & Fat */}

          <div className="two-fields">

            <div className="form-group">

              <label>Carbs (g)</label>

              <input

                type="number"

                name="carbs"

                value={formData.carbs}

                onChange={handleChange}

                required

              />

            </div>

            <div className="form-group">

              <label>Fat (g)</label>

              <input

                type="number"

                name="fat"

                value={formData.fat}

                onChange={handleChange}

                required

              />

            </div>

          </div>

          {/* Time */}

          <div className="form-group">

            <label>Meal Time</label>

            <input

              type="time"

              name="time"

              value={formData.time}

              onChange={handleChange}

              required

            />

          </div>

          {/* Buttons */}

          <div className="modal-buttons">

            <button

              type="button"

              className="cancel-btn"

              onClick={closeModal}

            >

              Cancel

            </button>

            <button

              type="submit"

              className="save-btn"

            >

              {editingMeal ? "Update Meal" : "Save Meal"}

            </button>

          </div>

        </form>

      </div>

    </div>

  );

}

export default MealModal;