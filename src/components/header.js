import React from 'react';

function Header() {
  return (
    <div className="header animate__animated animate__fadeIn">
        <div className="header-text animate__animated animate__fadeIn">

            <div className="firstName">CHANTAL</div>
            <div className="lastName">BROUSSEAU</div>
            <div className="title">BA History & Computer Science</div>

            <div className="header-buttons">

                <div class="button" id="button-3">
                  <div id="circle"></div>
                  <a href="#about">About</a>
                </div>

                <div class="button" id="button-3">
                  <div id="circle"></div>
                  <a href="#projects">Projects</a>
                </div>

                <div class="button" id="button-3">
                  <div id="circle"></div>
                  <a href="#experience">Experience</a>
                </div>

                <div class="button" id="button-3">
                  <div id="circle"></div>
                  <a href="#">Resume</a>
                </div>

            </div>
            
        </div>
    </div>
  );
}

export default Header;
