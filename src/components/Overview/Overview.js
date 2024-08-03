import "./Overview.css";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function Overview() {
  return (
    <div id="about" className="overview">
      <div className="overview-container">
        <div className="overview-container-top">
          <h2>Here are the Exciting Events and Activities we regularly host</h2>
          <div className="events">
            <p data-aos="slide-right" data-aos-duration="500">
              <i className="fa-solid fa-book-open-reader"></i> Workshops
            </p>
            <p data-aos="slide-right" data-aos-duration="700">
              {" "}
              <i className="fa-solid fa-laptop-code"></i> Hackathons
            </p>
            <p data-aos="slide-right" data-aos-duration="1100">
              <i className="fa-solid fa-laptop-file"></i>Seminars
            </p>
            <p data-aos="slide-right" data-aos-duration="900">
              {" "}
              <i className="fa-sharp fa-solid fa-code"></i> Coding Contest
            </p>
          </div>
        </div>

        <div className="overview-container-bottom">
          <div className="overview-container-bottom-left">
            <h2>What is LOL?</h2>
            <p data-aos="zoom-in" data-aos-duration="2500">
              LOL Coding Club is a vibrant and inclusive community built by
              students and dedicated to students. As the name suggests, we
              believe in Learning Out Loud, where education becomes a thrilling
              and interactive experience. Our mission is to create a platform
              where students can come together, collaborate, and dive into the
              fascinating world of coding and technology.
            </p>
          </div>
          <div className="overview-container-bottom-right">
            <h2>What we do?</h2>
            <p data-aos="zoom-in" data-aos-duration="2500">
              At LOL Coding Club, we are committed to fostering a supportive
              environment that nurtures skill development and creativity. Our
              community thrives on the passion for coding and the desire to
              learn and grow together. Whether you are a beginner or an
              experienced coder, we welcome all skill levels to join us on this
              exciting journey of discovery and innovation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
