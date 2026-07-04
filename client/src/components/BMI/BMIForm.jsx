import { useEffect, useState } from "react";

import {
  FaRulerVertical,
  FaWeight,
  FaBirthdayCake,
  FaUser,
  FaBullseye,
  FaCalculator,
} from "react-icons/fa";

import "./BMIForm.css";

function BMIForm({ calculateBMI }) {

  const [form, setForm] = useState({
    height: "",
    weight: "",
    age: "",
    gender: "Male",
    goal: "Maintain Weight",
  });

  useEffect(() => {

    const savedProfile = localStorage.getItem("profile");

    if (savedProfile) {

      const profile = JSON.parse(savedProfile);

      setForm({
        height: profile.height || "",
        weight: profile.weight || "",
        age: profile.age || "",
        gender: profile.gender || "Male",
        goal: profile.goal || "Maintain Weight",
      });

    }

  }, []);

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    calculateBMI(form);

  };

  return (

    <>

      <h2 className="form-title">Enter Your Details</h2>

      <form className="bmi-form" onSubmit={handleSubmit}>

        <div className="input-group">
          <FaRulerVertical />
          <input
            type="number"
            name="height"
            placeholder="Height (cm)"
            value={form.height}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <FaWeight />
          <input
            type="number"
            name="weight"
            placeholder="Weight (kg)"
            value={form.weight}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <FaBirthdayCake />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={form.age}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <FaUser />
          <select
            name="gender"
            value={form.gender}
            onChange={handleChange}
          >
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>

        <div className="input-group">
          <FaBullseye />
          <select
            name="goal"
            value={form.goal}
            onChange={handleChange}
          >
            <option>Weight Loss</option>
            <option>Maintain Weight</option>
            <option>Weight Gain</option>
          </select>
        </div>

        <button className="calculate-btn" type="submit">
          <FaCalculator />
          Calculate BMI
        </button>

      </form>

    </>

  );

}

export default BMIForm;