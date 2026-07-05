import { useEffect, useState } from "react";

import API from "../../services/api";

import Sidebar from "../../components/Sidebar/Sidebar";

import {
  FaAppleAlt,
  FaTimesCircle,
  FaTint,
  FaHeartbeat,
} from "react-icons/fa";

import "./DietRecommendation.css";

function DietRecommendation() {

  const [result, setResult] = useState({

    bmi: "--",

    category: "",

  });

  useEffect(() => {

    loadBMI();

  }, []);

  const loadBMI = async () => {

    try {

      const res = await API.get("/bmi");

      if (res.data.success && res.data.bmi) {

        setResult({

          bmi: res.data.bmi.bmi,

          category: res.data.bmi.category,

        });

      }

    }

    catch (error) {

      alert("Something went wrong.");

    }

  };

  let recommended = [];

  let avoid = [];

  let water = "2.5 L";

  switch (result.category) {

    case "Underweight":

      recommended = [

        "Milk",

        "Eggs",

        "Bananas",

        "Rice",

        "Peanut Butter",

      ];

      avoid = [

        "Skipping Meals",

        "Soft Drinks",

      ];

      water = "2.5 L";

      break;

    case "Normal Weight":

      recommended = [

        "Fruits",

        "Vegetables",

        "Whole Grains",

        "Lean Protein",

        "Milk",

      ];

      avoid = [

        "Junk Food",

        "Sugary Drinks",

      ];

      water = "3 L";

      break;

    case "Overweight":

      recommended = [

        "Oats",

        "Salads",

        "Brown Rice",

        "Fruits",

        "Green Tea",

      ];

      avoid = [

        "Fried Food",

        "Bakery Items",

        "Soft Drinks",

      ];

      water = "3 L";

      break;

    case "Obese":

      recommended = [

        "Vegetables",

        "High Fiber Foods",

        "Low Fat Dairy",

        "Sprouts",

      ];

      avoid = [

        "Fast Food",

        "Sugar",

        "Processed Foods",

      ];

      water = "3.5 L";

      break;

    default:

      recommended = [

        "Complete your BMI assessment first.",

      ];

      avoid = [];

      water = "--";

  }

  return (

    <>

      <Sidebar />

      <main className="diet-page">

        <div className="diet-header">

          <h1>🥗 Diet Recommendation</h1>

          <p>

            Personalized diet suggestions based on your BMI.

          </p>

        </div>

        <div className="diet-card">

          <div className="bmi-info">

            <FaHeartbeat />

            <div>

              <h2>

                BMI : {result.bmi}

              </h2>

              <p>

                Category : {result.category || "--"}

              </p>

            </div>

          </div>

          <div className="diet-section">

            <h3>

              Recommended Foods

            </h3>

            {

              recommended.map((food, index) => (

                <div

                  key={index}

                  className="food good"

                >

                  <FaAppleAlt />

                  {food}

                </div>

              ))

            }

          </div>

          <div className="diet-section">

            <h3>

              Foods To Avoid

            </h3>

            {

              avoid.length > 0 ? (

                avoid.map((food, index) => (

                  <div

                    key={index}

                    className="food bad"

                  >

                    <FaTimesCircle />

                    {food}

                  </div>

                ))

              ) : (

                <p>No restrictions available.</p>

              )

            }

          </div>

          <div className="water-card">

            <FaTint />

            Drink

            <strong>

              {water}

            </strong>

            Water Daily

          </div>

        </div>

      </main>

    </>

  );

}

export default DietRecommendation;