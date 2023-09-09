import React from "react";
import vision from "../images/vision.jpg";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function Vision() {
  return (
    <div className="vision">
      <div className="vision-title">
        <h2>VISSION</h2>
      </div>

      <div className="vision-content">
        <div className="vision-left">
          <img src={vision} alt="" />
        </div>

        <p className="vision-right">
          LOL Coding Club is a vibrant and inclusive community built by students
          and dedicated to students. As the name suggests, we believe in
          Learning Out Loud, where education becomes a thrilling and interactive
          experience. Our mission is to create a platform where students can
          come together, collaborate, and dive into the fascinating world of
          coding and technology.
        </p>
      </div>
    </div>
  );
}

export default Vision;
