import React, { useEffect } from "react";
import Footer from "../components/layouts/Footer";
import Header from "../components/layouts/Header";
import AboutHero from "../components/layouts/about/AboutHero";
import WeKnow from "../components/layouts/about/WeKnow";
import Team from "../components/layouts/about/Team";
import JoinUs from "../components/layouts/about/JoinUs";
import WOW from 'wowjs';

function About() {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  });
  return (
    <>
      <Header />
      <AboutHero />
      <WeKnow />
      {/* <Team />
      <JoinUs /> */}
      <Footer />
    </>
  );
}

export default About;
