import { useEffect } from "react";

import Navbar from "../../components/Landing/Navbar/Navbar";
import Hero from "../../components/Landing/Hero/Hero";
import Features from "../../components/Landing/Features/Features";
import Stats from "../../components/Landing/Stats/Stats";
import About from "../../components/Landing/About/About";
import Contact from "../../components/Landing/Contact/Contact";

function Landing() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <section id="features">
        <Features />
      </section>

      

      <section id="about">
        <About />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
  );
}

export default Landing;