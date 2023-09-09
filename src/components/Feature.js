import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function EventContainer() {
  return (
    <div className="event-container">
      <div className="event-info">
        <h1>UPCOMING EVENT</h1>
        <h2>Git & GitHub Workshop</h2>
        <p>Hands on Session on Git & GitHub</p>
        <p>Remote Center Hall, WIT Solapur</p>
        <p>SATURDAY, 1st JULY 2023</p>
        <p>Register to Participate!</p>
      </div>
      <a className="register-btn" href="#events">
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
      <div className="news-letter-hashnode">
        <i className="fa fa-newspaper-o"></i>
        Subscribe News Letter
      </div>
      <div className="write-blog">
        <i className="fa-brands fa-blogger-b"></i>
        Write Blog for LOL
      </div>
      <div className="suggestion-box">
        <i className="fa-solid fa-box-tissue"></i>
        LOL Suggestion Box
      </div>
      <div className="follow-hashnode">
        <i className="fa-brands fa-hashnode"></i>
        Follow Us On hashnode
      </div>
      <div className="socials">
        <i className="fa-brands fa-linkedin"></i>
        <i className="fa-brands fa-discord"></i>
        <i className="fa-brands fa-slack"></i>
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-instagram"></i>
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
