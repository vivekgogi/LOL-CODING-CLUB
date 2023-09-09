import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Feature from "../components/Feature";
import Overview from "../components/Overview";
import Mission from "../components/Mission";
import Vision from "../components/Vision";

function HomePage() {
  return (
    <div>
      <Header />
      <Hero />
      <Feature />
      <Overview />
      <Mission />
      <Vision />
      <Footer />
    </div>
  );
}

export default HomePage;
