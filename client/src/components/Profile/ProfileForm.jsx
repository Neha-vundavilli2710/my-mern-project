import { useEffect, useState } from "react";

import "./ProfileForm.css";

function ProfileForm() {

  const [profile, setProfile] = useState(() => {

    const savedProfile = localStorage.getItem("profile");

    return savedProfile
      ? JSON.parse(savedProfile)
      : {
          name: "",
          email: "",
          phone: "",
          age: "",
          gender: "Male",
          height: "",
          weight: "",
          activity: "Moderate",
          goal: "Maintain Weight",
          waterGoal: "3",
        };

  });

  useEffect(() => {

    localStorage.setItem(

      "profile",

      JSON.stringify(profile)

    );

  }, [profile]);

  const handleChange = (e) => {

    setProfile({

      ...profile,

      [e.target.name]: e.target.value,

    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    alert("Profile Saved Successfully!");

  };

  return (

    <div className="profile-form">

      <h2>Personal Information</h2>

      <form onSubmit={handleSubmit}>

        <div className="two-columns">

          <div className="form-group">

            <label>Full Name</label>

            <input

              type="text"

              name="name"

              value={profile.name}

              onChange={handleChange}

              required

            />

          </div>

          <div className="form-group">

            <label>Email</label>

            <input

              type="email"

              name="email"

              value={profile.email}

              onChange={handleChange}

              required

            />

          </div>

        </div>

        <div className="two-columns">

          <div className="form-group">

            <label>Phone</label>

            <input

              type="text"

              name="phone"

              value={profile.phone}

              onChange={handleChange}

            />

          </div>

          <div className="form-group">

            <label>Age</label>

            <input

              type="number"

              name="age"

              value={profile.age}

              onChange={handleChange}

            />

          </div>

        </div>

        <div className="two-columns">

          <div className="form-group">

            <label>Gender</label>

            <select

              name="gender"

              value={profile.gender}

              onChange={handleChange}

            >

              <option>Male</option>

              <option>Female</option>

            </select>

          </div>

          <div className="form-group">

            <label>Activity Level</label>

            <select

              name="activity"

              value={profile.activity}

              onChange={handleChange}

            >

              <option>Low</option>

              <option>Moderate</option>

              <option>High</option>

            </select>

          </div>

        </div>

        <div className="two-columns">

          <div className="form-group">

            <label>Height (cm)</label>

            <input

              type="number"

              name="height"

              value={profile.height}

              onChange={handleChange}

            />

          </div>

          <div className="form-group">

            <label>Weight (kg)</label>

            <input

              type="number"

              name="weight"

              value={profile.weight}

              onChange={handleChange}

            />

          </div>

        </div>

        <div className="two-columns">

          <div className="form-group">

            <label>Health Goal</label>

            <select

              name="goal"

              value={profile.goal}

              onChange={handleChange}

            >

              <option>Weight Loss</option>

              <option>Maintain Weight</option>

              <option>Weight Gain</option>

            </select>

          </div>

          <div className="form-group">

            <label>Daily Water Goal (L)</label>

            <input

              type="number"

              name="waterGoal"

              value={profile.waterGoal}

              onChange={handleChange}

            />

          </div>

        </div>

        <button

          className="save-profile-btn"

          type="submit"

        >

          Save Profile

        </button>

      </form>

    </div>

  );

}

export default ProfileForm;