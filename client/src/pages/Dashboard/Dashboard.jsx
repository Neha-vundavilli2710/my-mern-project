import { useEffect, useState } from "react";

import Sidebar from "../../components/Sidebar/Sidebar";

import WelcomeCard from "../../components/Dashboard/WelcomeCard";
import StatsCards from "../../components/Dashboard/StatsCards";
import MealCard from "../../components/Dashboard/MealCard";
import NutritionSummary from "../../components/Dashboard/NutritionSummary";

import "./Dashboard.css";

function Dashboard() {

  const [profile, setProfile] = useState({});
  const [bmiResult, setBmiResult] = useState(null);

  useEffect(() => {

    const savedProfile = localStorage.getItem("profile");

    if (savedProfile) {

      setProfile(JSON.parse(savedProfile));

    }

    const savedBMI = localStorage.getItem("bmiResult");

    if (savedBMI) {

      setBmiResult(JSON.parse(savedBMI));

    }

  }, []);

  return (

    <>

      <Sidebar />

      <main className="dashboard">

        <WelcomeCard profile={profile} />

        <StatsCards

          profile={profile}

          bmiResult={bmiResult}

        />

        <div className="dashboard-bottom">

          <MealCard />

          <NutritionSummary />

        </div>

      </main>

    </>

  );

}

export default Dashboard;