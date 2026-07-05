import { useEffect, useState } from "react";

import API from "../../services/api";

import Sidebar from "../../components/Sidebar/Sidebar";

import BMIForm from "../../components/BMI/BMIForm";
import BMIResult from "../../components/BMI/BMIResult";
import BMITable from "../../components/BMI/BMITable";
import HealthTips from "../../components/BMI/HealthTips";

import "./BMI.css";

function BMI() {

  const [result, setResult] = useState(null);

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

      console.log(error);

    }

  };

  const calculateBMI = async (data) => {

    const height = Number(data.height) / 100;

    const weight = Number(data.weight);

    if (!height || !weight) return;

    const bmi = weight / (height * height);

    let category = "";

    if (bmi < 18.5) {

      category = "Underweight";

    }

    else if (bmi < 25) {

      category = "Normal Weight";

    }

    else if (bmi < 30) {

      category = "Overweight";

    }

    else {

      category = "Obese";

    }

    const bmiResult = {

      bmi: bmi.toFixed(1),

      category,

    };

    setResult(bmiResult);

    try {

      await API.post("/bmi", bmiResult);

    }

    catch (error) {

      console.log(error);

    }

  };

  return (

    <>

      <Sidebar />

      <main className="bmi-page">

        <div className="bmi-header">

          <h1>⚖️ BMI Calculator</h1>

          <p>

            Calculate your Body Mass Index and understand your health status.

          </p>

        </div>

        <div className="bmi-container">

          <div className="grid-card">

            <BMIForm calculateBMI={calculateBMI} />

          </div>

          <div className="grid-card">

            <BMIResult result={result} />

          </div>

          <div className="grid-card">

            <BMITable />

          </div>

          <div className="grid-card">

            <HealthTips result={result} />

          </div>

        </div>

      </main>

    </>

  );

}

export default BMI;