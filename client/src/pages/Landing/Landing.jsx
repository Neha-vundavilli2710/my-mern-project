import Navbar from "../../components/Landing/Navbar/Navbar";
import Hero from "../../components/Landing/Hero/Hero";
import Features from "../../components/Landing/Features/Features";
import Stats from "../../components/Landing/Stats/Stats";
import About from "../../components/Landing/About/About";
import Contact from "../../components/Landing/Contact/Contact";

function Landing() {
  return (
    <>
      <Navbar />

      <Hero />

      <Features />

      <Stats />

      <About />

      <Contact />
    </>
  );
}

export default Landing;