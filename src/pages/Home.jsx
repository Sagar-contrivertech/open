import React, { createContext } from "react";
import Advice from "../components/layouts/Advice";
import AdviceRotation from "../components/layouts/AdviceRotation";
import Counter from "../components/layouts/Counter";
import Footer from "../components/layouts/Footer";
import Header from "../components/layouts/Header";
import Hero from "../components/layouts/Hero";
import HomeProduct from "../components/layouts/HomeProduct";
import Partner from "../components/layouts/Partner";
import Services from "../components/layouts/Services";
import Testimonial from "../components/layouts/Testimonial";
import Whyus from "../components/layouts/Whyus";


function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Counter />
      <Partner />
      <HomeProduct />
      <Whyus />
      <AdviceRotation />
      <Advice />
      <Services />
      {/* <Testimonial /> */}
      <Footer />

    </>
  );
}

export default Home;
