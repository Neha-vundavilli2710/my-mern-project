import { useEffect, useState } from "react";

import API from "../../services/api";

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

    loadProfile();

  }, []);

  const loadProfile = async () => {

    try {

      const res = await API.get("/profile");

      if (res.data.success) {

        const profile = res.data.profile;

        setForm({

          height: profile.height || "",

          weight: profile.weight || "",

          age: profile.age || "",

          gender: profile.gender || "Male",

          goal: profile.goal || "Maintain Weight",

        });

      }

    }

    catch (error) {

      alert("Something went wrong.");

    }

  };

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

      <h2 className="form-title">

        Enter Your Details

      </h2>

      <form className="bmi-form" onSubmit={handleSubmit}>

        <div className="input-group">

          <FaRulerVertical />

          <input
            type="number"
            name="height"
            value={form.height}
            onChange={handleChange}
            placeholder="Height (cm)"
            required
          />

        </div>

        <div className="input-group">

          <FaWeight />

          <input
            type="number"
            name="weight"
            value={form.weight}
            onChange={handleChange}
            placeholder="Weight (kg)"
            required
          />

        </div>

        <div className="input-group">

          <FaBirthdayCake />

          <input
            type="number"
            name="age"
            value={form.age}
            onChange={handleChange}
            placeholder="Age"
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

            <option>Other</option>

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