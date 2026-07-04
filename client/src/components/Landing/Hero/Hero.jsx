import "./Hero.css";

import heroImage from "../../../assets/images/hero/hero.png";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

        <span className="badge">
          🌿 Smart Nutrition Companion
        </span>

        <h1>
          Your Personalized
          <br />
          <span>Nutrition Journey</span>
          <br />
          Starts Here
        </h1>

        <p>
          Plan your meals, monitor your nutrition, track your
          health progress and receive personalized diet
          recommendations based on your lifestyle.
        </p>

      </div>

      <div className="hero-center">

        <img
          src={heroImage}
          alt="Nutrition Hero"
        />

      </div>

    </section>
  );
}

export default Hero;