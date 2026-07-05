import { useEffect, useState } from "react";

import API from "../../services/api";

import Sidebar from "../../components/Sidebar/Sidebar";

import {
  FaHeartbeat,
  FaCalendarAlt,
} from "react-icons/fa";

import "./History.css";

function History() {

  const [bmiHistory, setBmiHistory] = useState([]);

  const [mealHistory, setMealHistory] = useState({});

  useEffect(() => {

    loadHistory();

  }, []);

  const loadHistory = async () => {

    try {

      const res = await API.get("/history");

      if (res.data.success) {

        setBmiHistory(res.data.bmiHistory || []);

        setMealHistory(res.data.mealHistory || {});

      }

    }

    catch (error) {

      alert("Something went wrong.");

    }

  };

  return (

    <>

      <Sidebar />

      <main className="history-page">

        <div className="history-header">

          <h1>📜 History</h1>

          <p>

            View your saved BMI results and meal plans.

          </p>

        </div>

        <div className="history-grid">

          {/* BMI */}

          <div className="history-card">

            <div className="history-title">

              <FaHeartbeat />

              <h2>BMI History</h2>

            </div>

            {

              bmiHistory.length > 0 ? (

                bmiHistory.map((item) => (

                  <div

                    key={item._id}

                    className="meal-history"

                  >

                    <h4>

                      {new Date(item.createdAt).toLocaleDateString()}

                    </h4>

                    <p>

                      BMI : {item.bmi}

                    </p>

                    <p>

                      {item.category}

                    </p>

                  </div>

                ))

              ) : (

                <p>No BMI history available.</p>

              )

            }

          </div>

          {/* Meals */}

          <div className="history-card">

            <div className="history-title">

              <FaCalendarAlt />

              <h2>Weekly Meal Plan</h2>

            </div>

            {

              Object.keys(mealHistory).length > 0 ? (

                Object.entries(mealHistory)

                  .filter(

                    ([key]) =>

                      !["_id","userId","createdAt","updatedAt","__v"]

                        .includes(key)

                  )

                  .map(

                    ([day, meal]) => (

                      <div

                        key={day}

                        className="meal-history"

                      >

                        <h4>{day}</h4>

                        <p>

                          🍳 {meal?.breakfast || "-"}

                        </p>

                        <p>

                          🍛 {meal?.lunch || "-"}

                        </p>

                        <p>

                          🥗 {meal?.dinner || "-"}

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