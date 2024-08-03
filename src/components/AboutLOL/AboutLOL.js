import DarkLogoLOL from "../../images/LightLogoLOL.jpg";
import LogoWIT from "../../images/LogoWIT.png";
import "./AboutLOL.css";

function AboutLOL() {
  return (
    <>
      <div className="about-lol">
        <h1 className="about-lol-heading">About</h1>
        <h3
          className="about-lol-sub-heading"
          data-aos="zoom-in-down"
          data-aos-duration="1500"
        >
          💻 Know about our Coding Community 🚀
        </h3>

        <div className="about-lol-content">
          <div
            className="about-lol-content-left"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <div className="about-lol-content-img">
              <img src={LogoWIT} alt="LOL" />
            </div>

            <h2 className="about-lol-content-text">WIT, Solapur</h2>
          </div>

          <div
            className="about-lol-content-right"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <div className="about-lol-content-img">
              <img src={DarkLogoLOL} alt="LOL" />
            </div>

            <h2 className="about-lol-content-text">Coding Club</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutLOL;
