import React from "react";
import LightLogoLOL from "../images/LightLogoLOL.jpg";
import LogoWIT from "../images/LogoWIT.png";
import { Outlet, Link } from "react-router-dom";
import "../App.css";

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img src={LightLogoLOL} alt="LOL" />
        <img src={LogoWIT} alt="LOL" />
      </div>

      <div className="menu">
        <Link to="/">LOL Home</Link>

        <a
          href="https://witsolapur.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          WIT Home
        </a>

        <Link to="/about">About</Link>

        <Link to="/events">Events</Link>

        <Link to="/team">Team</Link>

        <a
          href="https://lolclubwit.hashnode.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Blogs
        </a>
      </div>
      <Outlet />
    </div>
  );
}

export default Header;
