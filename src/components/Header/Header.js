import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./Header.css";
import TemporaryDrawer from "./TemporaryDrawer";
import LightLogoLOL from "../../images/LightLogoLOL.jpg";
import LogoWIT from "../../images/LogoWIT.png";

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <img src={LightLogoLOL} alt="LOL" />
        </Link>

        <a
          href="https://witsolapur.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={LogoWIT} alt="LOL" />
        </a>
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
          Blog
        </a>

        <Link to="/alumniconnect">Alumni Connect</Link>
      </div>

      <TemporaryDrawer />
      <Outlet />
    </div>
  );
}

export default Header;
