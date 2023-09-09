import React from "react";
import mission from "../images/mission.jpg";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function Mission() {
  return (
    <div className="mission">
      <div className="mission-title">
        <h2>MISSION</h2>
      </div>
      
      <div className="mission-content" data-aos="slide-up" data-aos-duration="2500">
      <div className="mission-left">
        <ul>
          <li>
            <i class="fa-sharp fa-solid fa-code"></i>Foster a dynamic and
            inclusive community of learners.
          </li>
          <li>
            <i class="fa-sharp fa-solid fa-code"></i>Unite members with a shared
            passion for coding and technology.
          </li>
          <li>
            <i class="fa-sharp fa-solid fa-code"></i>Provide a supportive
            environment for skill enhancement.
          </li>
          <li>
            <i class="fa-sharp fa-solid fa-code"></i>Encourage exploration of
            new technologies and coding concepts.
          </li>
          <li>
            <i class="fa-sharp fa-solid fa-code"></i>Collaborate on innovative
            coding projects and initiatives.
          </li>
          <li>
            <i class="fa-sharp fa-solid fa-code"></i>Prepare individuals to
            adapt in the ever-evolving digital landscape.
          </li>
        </ul>
      </div>
      
      <div className="mission-right">
        <img src={mission} alt="" />
      </div>
      </div>
    </div>
  );
}

export default Mission;
