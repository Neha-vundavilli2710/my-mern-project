import { useEffect, useState } from "react";

import "./ProfileCard.css";

import {
  FaUser,
  FaEnvelope,
  FaRulerVertical,
  FaWeight,
  FaBullseye,
  FaTint,
  FaHeartbeat,
} from "react-icons/fa";

function ProfileCard() {

  const [profile, setProfile] = useState({

    name: "",
    email: "",
    height: "",
    weight: "",
    goal: "",
    waterGoal: "",

  });

  useEffect(() => {

    const savedProfile = localStorage.getItem("profile");

    if (savedProfile) {

      setProfile(JSON.parse(savedProfile));

    }

  }, []);

  let bmi = "--";

  if (profile.height && profile.weight) {

    const h = Number(profile.height) / 100;

    bmi = (

      Number(profile.weight) /

      (h * h)

    ).toFixed(1);

  }

  return (

    <div className="profile-summary">

      <div className="profile-avatar">

        <FaUser />

      </div>

      <h2>

        {profile.name || "Your Name"}

      </h2>

      <p>

        {profile.email || "example@email.com"}

      </p>

      <div className="summary-list">

        <div className="summary-row">

          <FaRulerVertical />

          <span>Height</span>

          <strong>

            {profile.height || "--"} cm

          </strong>

        </div>

        <div className="summary-row">

          <FaWeight />

          <span>Weight</span>

          <strong>

            {profile.weight || "--"} kg

          </strong>

        </div>

        <div className="summary-row">

          <FaHeartbeat />

          <span>BMI</span>

          <strong>

            {bmi}

          </strong>

        </div>

        <div className="summary-row">

          <FaBullseye />

          <span>Goal</span>

          <strong>

            {profile.goal || "--"}

          </strong>

        </div>

        <div className="summary-row">

          <FaTint />

          <span>Water Goal</span>

          <strong>

            {profile.waterGoal || "--"} L

          </strong>

        </div>

      </div>

    </div>

  );

}

export default ProfileCard;