import { useEffect, useState } from "react";

import Sidebar from "../../components/Sidebar/Sidebar";

import {
  FaHeartbeat,
  FaCalendarAlt,
} from "react-icons/fa";

import "./History.css";

function History() {

  const [bmi, setBmi] = useState(null);
  const [weeklyMeals, setWeeklyMeals] = useState({});

  useEffect(() => {

    const savedBMI = JSON.parse(
      localStorage.getItem("bmiResult")
    );

    if (savedBMI) {
      setBmi(savedBMI);
    }

    const savedMeals = JSON.parse(
      localStorage.getItem("weeklyMeals")
    );

    if (savedMeals) {
      setWeeklyMeals(savedMeals);
    }

  }, []);

  return (

    <>
      <Sidebar />

      <main className="history-page">

        <div className="history-header">

          <h1>📜 History</h1>

          <p>
            View your saved BMI result and meal plans.
          </p>

        </div>

        <div className="history-grid">

          {/* BMI */}

          <div className="history-card">

            <div className="history-title">

              <FaHeartbeat />

              <h2>Latest BMI</h2>

            </div>

            {

              bmi ? (

                <>

                  <h3>BMI : {bmi.bmi}</h3>

                  <p>{bmi.category}</p>

                </>

              ) : (

                <p>No BMI record available.</p>

              )

            }

          </div>

          {/* Meal Plans */}

          <div className="history-card">

            <div className="history-title">

              <FaCalendarAlt />

              <h2>Weekly Meal Plan</h2>

            </div>

            {

              Object.keys(weeklyMeals).length > 0 ? (

                Object.entries(weeklyMeals).map(
                  ([day, meal]) => (

                    <div
                      key={day}
                      className="meal-history"
                    >

                      <h4>{day}</h4>

                      <p>
                        🍳 {meal.breakfast || "-"}
                      </p>

                      <p>
                        🍛 {meal.lunch || "-"}
                      </p>

                      <p>
                        🥗 {meal.dinner || "-"}
                      </p>

                    </div>

                  )
                )

              ) : (

                <p>
                  No meal plans available.
                </p>

              )

            }

          </div>

        </div>

      </main>

    </>

  );

}

export default History;