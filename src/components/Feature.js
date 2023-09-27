import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function EventContainer() {
  return (
    <div className="event-container">
      <div className="event-info">
        <h1>UPCOMING EVENT</h1>
        <h2>Power BI BootCamp</h2>
        <p>Hands on Session on Power BI</p>
        <p>Remote Center Hall, WIT Solapur</p>
        <p>MONDAY, 9th OCTOBER 2023</p>
        <p>Register to Participate!</p>
      </div>
      <a className="register-btn" href="#">
        Register Now
      </a>
    </div>
  );
}

function ExploreContainer() {
  return (
    <div
      className="explore-container"
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1000"
    >
      <h1>EXPLORE</h1>

      <div className="news-letter-hashnode">
        <a href="https://lolclubwit.hashnode.dev/newsletter" target="_blank">
          <i className="fa fa-newspaper-o"></i>
          Subscribe News Letter
        </a>
      </div>
      <div className="write-blog">
        <a href="#" target="_blank">
          <i className="fa-brands fa-blogger-b"></i>
          Write Blog for LOL
        </a>
      </div>
      <div className="suggestion-box">
        <a href="#" target="_blank">
          <i className="fa-solid fa-box-tissue"></i>
          LOL Suggestion Box
        </a>
      </div>
      <div className="follow-hashnode">
        <a href="https://hashnode.com/@lolclubwit" target="_blank">
          <i className="fa-brands fa-hashnode"></i>
          Follow Us On hashnode
        </a>
      </div>
      <div className="socials">
        <a
          href="https://www.linkedin.com/company/lol-coding-club/"
          target="_blanck"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://www.instagram.com/lolcodingclub_wit/" target="_blanck">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="https://discord.com/invite/dVU3XgXp" target="_blanck">
          <i className="fa-brands fa-discord"></i>
        </a>
        <a href="https://hashnode.com/@lolclubwit" target="_blanck">
          <i className="fa-brands fa-hashnode"></i>
        </a>
      </div>
    </div>
  );
}

function Feature() {
  return (
    <section className="feature">
      <EventContainer />
      <ExploreContainer />
    </section>
  );
}

export default Feature;
