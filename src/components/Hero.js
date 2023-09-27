import React from "react";
import textlolwhite from "../images/textlolwhite.png";
import HeroRight from "../images/HeroRight.png";
import "../App.css";

function Hero() {
    return (
      <>
        <div id="home" className="hero">
          <div className="hero-left">
            <div
              className="title"
              data-cursor-text="Learning Out Loud"
              data-cursor
            >
              <img src={textlolwhite} alt="LOL" />
            </div>
            
            <h2 className="subtitle">CODING CLUB</h2>
            <h4 className="description">
              LOL Coding Club is a vibrant and inclusive community built by
              students and dedicated to students. At LOL Coding Club, learning is
              not just a solitary pursuit; it's an exhilarating adventure with
              friends, mentors, and boundless possibilities. <span>Together, let's Learn
              Out Loud!</span>
            </h4>
            
            <div className="register-btn" data-cursor-text="Join Us!">
              {/* <a href="https://forms.gle/UvR5xxsWkK2jsXDi9" target="_blanck">Get Membership</a> */}
              <a href="" target="_blanck">Get Membership</a>
            </div>
          </div>

          <div className="hero-right" data-cursor-text="Learning Out Loud">
            <img src={HeroRight} alt="" />
          </div>
        </div>
      </>
    );
  }
  
  export default Hero;