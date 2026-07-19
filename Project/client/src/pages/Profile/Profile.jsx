import Sidebar from "../../components/Sidebar/Sidebar";

import ProfileForm from "../../components/Profile/ProfileForm";
import ProfileCard from "../../components/Profile/ProfileCard";

import "./Profile.css";

function Profile() {

  return (

    <>

      <Sidebar />

      <main className="profile-page">

        <div className="profile-header">

          <h1>👤 My Profile</h1>

          <p>

            Manage your personal information and health details.

          </p>

        </div>

        <div className="profile-layout">

          <div className="profile-form-card">

            <ProfileForm />

          </div>

          <div className="profile-summary-card">

            <ProfileCard />

          </div>

        </div>

      </main>

    </>

  );

}

export default Profile;