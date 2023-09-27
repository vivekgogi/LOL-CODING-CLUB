import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutLOL from "../components/AboutLOL";
import Overview from "../components/Overview";
import Mission from "../components/Mission";
import Vision from "../components/Vision";

function AboutPage() {
  return (
    <div>
      <Header />
      <AboutLOL />
      <Overview />
      <Mission />
      <Vision />
      <Footer />
    </div>
  );
}

export default AboutPage;
