import { useEffect, useState } from "react";

import API from "../../services/api";

import "./ProfileForm.css";

function ProfileForm() {

  const [profile, setProfile] = useState({

    age: "",

    gender: "Male",

    height: "",

    weight: "",

    goal: "Maintain Weight",

    waterGoal: 3,

  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    loadProfile();

  }, []);

  const loadProfile = async () => {

    try {

      const res = await API.get("/profile");

      if (res.data.success) {

        setProfile({

          age: res.data.profile.age || "",

          gender: res.data.profile.gender || "Male",

          height: res.data.profile.height || "",

          weight: res.data.profile.weight || "",

          goal: res.data.profile.goal || "Maintain Weight",

          waterGoal: res.data.profile.waterGoal || 3,

        });

      }

    }

    catch (error) {

      // Profile doesn't exist yet → keep defaults

    }

    finally {

      setLoading(false);

    }

  };

  const handleChange = (e) => {

    setProfile({

      ...profile,

      [e.target.name]: e.target.value,

    });

  };

  const handleSubmit = async (e) => {

  e.preventDefault();

  try {

    let res;

    try {

      // Try updating first
      res = await API.put("/profile", profile);

    }

    catch {

      // If profile doesn't exist, create it
      res = await API.post("/profile", profile);

    }

    alert(res.data.message);

    loadProfile();

  }

  catch (error) {

    alert(

      error.response?.data?.message ||

      "Unable to save profile."

    );

  }

};

  if (loading) {

    return <h3>Loading Profile...</h3>;

  }

  return (

    <div className="profile-form">

      <h2>Health Profile</h2>

      <form onSubmit={handleSubmit}>

        <div className="two-columns">

          <div className="form-group">

            <label>Age</label>

            <input

              type="number"

              name="age"

              value={profile.age}

              onChange={handleChange}

              required

            />

          </div>

          <div className="form-group">

            <label>Gender</label>

            <select

              name="gender"

              value={profile.gender}

              onChange={handleChange}

            >

              <option>Male</option>

              <option>Female</option>

              <option>Other</option>

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

              required

            />

          </div>

          <div className="form-group">

            <label>Weight (kg)</label>

            <input

              type="number"

              name="weight"

              value={profile.weight}

              onChange={handleChange}

              required

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

              required

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