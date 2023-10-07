import React from "react";
import LightLogoLOL from "../images/LightLogoLOL.jpg";
import { Outlet, Link } from "react-router-dom";
import "../App.css";

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img src={LightLogoLOL} alt="LOL" />
      </div>

      <ul className="menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/events">Events</Link>
        </li>
        <li>
          <Link to="/team">Team</Link>
        </li>
        <li>
          <a href="https://lolclubwit.hashnode.dev/" target="_blank" rel="noopener noreferrer">Blogs</a>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default Header;
