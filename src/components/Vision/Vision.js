import vision from "../../images/vision.jpg";
import "./Vision.css";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function Vision() {
  return (
    <div className="vision">
      <div className="vision-title">
        <h2>VISION</h2>
      </div>

      <div
        className="vision-content"
        data-aos="zoom-out"
        data-aos-duration="2500"
      >
        <div className="vision-left">
          <img src={vision} alt="" />
        </div>

        <p
          className="vision-right"
          data-aos="slide-up"
          data-aos-duration="2500"
        >
          We envision a dynamic community of lifelong learners united by their
          passion for coding and technology. Our goal is to provide a supportive
          environment that fosters skill enhancement, encourages exploration of
          new technologies, and promotes collaboration on innovative coding
          projects. Ultimately, we aim to prepare individuals to thrive in the
          ever-evolving digital landscape.
        </p>
      </div>
    </div>
  );
}

export default Vision;
