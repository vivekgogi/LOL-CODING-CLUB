import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function EventContainer() {
  return (
    <div className="event-container">
      <div className="event-info">
        <h1>UPCOMING EVENT</h1>
        <h2>Blockchain Blitz Workshop</h2>
        <p>Hands on Session on Blockchain</p>
        <p>Remote Center Hall, WIT Solapur</p>
        <p>SATURDAY, 24th FEB 2023</p>
        <p>Register to Participate!</p>
      </div>
      <a
        className="register-btn"
        href="https://forms.gle/L1X9ByWhNwGPuxB7A"
        target="_black"
      >
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
        <a
          href="https://lolclubwit.hashnode.dev/newsletter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-newspaper-o"></i>
          Subscribe News Letter
        </a>
      </div>
      <div className="write-blog">
        <a
          href="https://forms.gle/6keszXqp6ZNGgR6QA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-blogger-b"></i>
          Write Blog for LOL
        </a>
      </div>
      <div className="suggestion-box">
        <a
          href="https://forms.gle/QSMzwVr5PrZJcd6t8"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-solid fa-box-tissue"></i>
          LOL Suggestion Box
        </a>
      </div>
      <div className="follow-hashnode">
        <a
          href="https://play.google.com/store/apps/details?id=io.annadate.lol_id"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <i className="fa-brands fa-hashnode"></i> */}
          <i className="fa-brands fa-google-play" />
          Download LOL ID app
        </a>
      </div>
      <div className="socials">
        <a
          href="https://www.linkedin.com/company/lol-coding-club/"
          target="_blanck"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a
          href="https://www.instagram.com/lolcodingclub_wit/"
          target="_blanck"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a
          href="https://discord.gg/bjSxDHzEte"
          target="_blanck"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-discord"></i>
        </a>
        <a
          href="https://hashnode.com/@lolclubwit"
          target="_blanck"
          rel="noopener noreferrer"
        >
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
