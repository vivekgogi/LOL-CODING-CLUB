import React from "react";
import "../App.css";

function Footer() {
  return (
    <footer>
      {/* <div className="row-1">
        <Box1 />
        <Box2 />
        <Box3 />
        <Box4 />
      </div> */}
      <div className="row-2">
        <p>
          Copyright ©2023 All rights reserved | This is made with{" "}
          <i class="fa-solid fa-heart"></i> by LOL Coding Club Tech Team
        </p>
      </div>
    </footer>
  );
}

function Box1() {
  return (
    <div className="box-1">
      <h3>ABOUT LOL</h3>
      <p>Learning Out Loud</p>
      <p>
        Club by the students
        <br />
        and for the students!
      </p>
      <p>Learning Out Loud</p>
      <p>Learning Out Loud</p>
    </div>
  );
}

function Box2() {
  return (
    <div className="box-2">
      <h3>EVENTS</h3>
      <p>Workshops</p>
      <p>Hackathons</p>
      <p>Coding Contest</p>
      <p>Seminars</p>
      <p>Sessions</p>
    </div>
  );
}

function Box3() {
  return (
    <div className="box-3">
      <h3>DIRECT LINKS</h3>
      <p>Home</p>
      <p>About Us</p>
      <p>Our Team</p>
      <p>All Events</p>
      <p>Membership</p>
    </div>
  );
}

function Box4() {
  return (
    <div className="box-4">
      <h3>CONNECT US</h3>
      <p>
        <i class="fa fa-map-marker"></i>
        LOL Coding Club, <br />
        Walchand Institue Of Technology, <br />
        Solapur
      </p>
      <p>
        <i class="fa fa-phone" aria-hidden="true"></i> +91 9876543210
      </p>
      <p>
        <i class="fa fa-envelope" aria-hidden="true"></i> lolclub@gmail.com
      </p>
      <div className="socials">
        <i class="fa-brands fa-linkedin"></i>
        <i class="fa-brands fa-discord"></i>
        <i class="fa-brands fa-slack"></i>
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-instagram"></i>
      </div>
    </div>
  );
}

export default Footer;
