import "./WelcomeCard.css";

function WelcomeCard({ profile }) {

  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour < 12) {

    greeting = "Good Morning";

  }

  else if (hour < 17) {

    greeting = "Good Afternoon";

  }

  return (

    <div className="welcome-card">

      <div>

        <h2>

          👋 {greeting}

          {profile?.name ? `, ${profile.name}` : ""}

        </h2>

        <p>

          Welcome back to Nutrition Assistant.

          Stay healthy and achieve your daily nutrition goals.

        </p>

      </div>

      <div className="welcome-icon">

        🌿

      </div>

    </div>

  );

}

export default WelcomeCard;