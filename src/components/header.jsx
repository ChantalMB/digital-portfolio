import React from 'react';
import { Outlet, Link } from "react-router-dom";

function Header() {
  return (
    <div className="header animate__animated animate__fadeIn">
        <div className="header-text animate__animated animate__fadeIn">

            <div className="firstName">CHANTAL</div>
            <div className="lastName">BROUSSEAU</div>
            <div className="title">MA History & Data Science</div>

            <div className="header-buttons">

                <a href="#about">
                <div className="button" id="button-3">
                  <div id="circle"></div>
                  <p>About</p>
                </div>
                </a>

                <a href="#projects">
                <div className="button" id="button-3">
                  <div id="circle"></div>
                  <p>Projects</p>
                </div>
                </a>

                <a href="#experience">
                <div className="button" id="button-3">
                  <div id="circle"></div>
                  <p>Experience</p>
                </div>
                </a>

                <Link to={`cv/`}>
                <div className="button" id="button-3">
                  <div id="circle"></div>
                  <p>Resume</p>
                </div>
                </Link>

            </div>

        </div>
    </div>
  );
}

export default Header;
