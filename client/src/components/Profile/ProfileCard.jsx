import { useEffect, useState } from "react";

import API from "../../services/api";

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

  const [user, setUser] = useState({

    fullName: "",

    email: "",

  });

  const [profile, setProfile] = useState({

    height: "",

    weight: "",

    goal: "",

    waterGoal: "",

  });

  useEffect(() => {

    const savedUser = JSON.parse(

      localStorage.getItem("user")

    );

    if (savedUser) {

      setUser(savedUser);

    }

    loadProfile();

  }, []);

  const loadProfile = async () => {

    try {

      const res = await API.get("/profile");

      if (res.data.success) {

        setProfile(res.data.profile);

      }

    }

    catch (error) {

      console.log(error);

    }

  };

  let bmi = "--";

  if (profile.height && profile.weight) {

    const height = Number(profile.height) / 100;

    bmi = (

      Number(profile.weight) /

      (height * height)

    ).toFixed(1);

  }

  return (

    <div className="profile-summary">

      <div className="profile-avatar">

        <FaUser />

      </div>

      <h2>

        {user.fullName || "User"}

      </h2>

      <p>

        <FaEnvelope />

        {" "}

        {user.email || "example@email.com"}

      </p>

      <div className="summary-list">

        <div className="summary-row">

          <FaRulerVertical />

          <span>

            Height

          </span>

          <strong>

            {profile.height || "--"} cm

          </strong>

        </div>

        <div className="summary-row">

          <FaWeight />

          <span>

            Weight

          </span>

          <strong>

            {profile.weight || "--"} kg

          </strong>

        </div>

        <div className="summary-row">

          <FaHeartbeat />

          <span>

            BMI

          </span>

          <strong>

            {bmi}

          </strong>

        </div>

        <div className="summary-row">

          <FaBullseye />

          <span>

            Goal

          </span>

          <strong>

            {profile.goal || "--"}

          </strong>

        </div>

        <div className="summary-row">

          <FaTint />

          <span>

            Water Goal

          </span>

          <strong>

            {profile.waterGoal || "--"} L

          </strong>

        </div>

      </div>

    </div>

  );

}

export default ProfileCard;