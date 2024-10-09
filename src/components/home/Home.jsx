import React, { useEffect } from "react";
import Header from "../common/Header";
import About from "./About";
import FeaturesSection from "./FeaturesSection";
import ScriptLoader from "../common/ScriptLoader";
import StylesheetLoader from "../common/StylesheetLoader";
import TestimonialsCarousel from "./TestimonialsCarousel";
import ContactSection from "./ContactSection";
import CtaSection from "./CtaSection";
import HomeFooter from "../common/HomeFooter";
import { Link, useLocation } from "react-router-dom";

const Home = ({ viewCart, setViewCart }) => {
  const location = useLocation();

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (window.AOS) {
        window.AOS.init();
        clearInterval(intervalId);
      }
    }, 100);

    if (location.state?.scrollToAbout) {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
      }
    }

    return () => clearInterval(intervalId);
  }, [location]);

  return (
    <div className="home">
      <StylesheetLoader href="https://unpkg.com/aos@next/dist/aos.css" />
      <StylesheetLoader href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      <ScriptLoader src="https://unpkg.com/aos@next/dist/aos.js" />
      <section className="hero__sec">
        <Header viewCart={viewCart} setViewCart={setViewCart} />
        <div className="hero__content">
          <h1>Look Classy, Look Great</h1>
          <h3>Embrace your choice ...</h3>
          <Link to="/products">
            <button type="button">Shop Now</button>
          </Link>
        </div>
      </section>
      <About />
      <FeaturesSection />
      <TestimonialsCarousel />
      <ContactSection />
      <CtaSection />
      <HomeFooter />
    </div>
  );
};

export default Home;
