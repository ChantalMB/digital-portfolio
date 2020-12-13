import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare, faLinkedin} from '@fortawesome/free-brands-svg-icons';



function About() {

 const resIcon = <FontAwesomeIcon icon={faAddressCard} color="#083f49"/>
 const mailIcon = <FontAwesomeIcon icon={faEnvelope} color="#083f49"/>
 const gitIcon = <FontAwesomeIcon icon={faGithubSquare} color="#083f49"/>
 const linkedIcon = <FontAwesomeIcon icon={faLinkedin} color="#083f49"/>

  return (
      <div className="link">

        <div className="link-text">
        <div className="link-header">An Introduction</div>

        <hr></hr>

        <div className="link-description">
        <div>link me here.</div>

      </div>

      <div className="link-mobile">
      <div className="footer-links">
          <div className="footer-link hvr-float">
              <a href="https://github.com/ChantalMB">{gitIcon}</a>
          </div>
          <div className="footer-link hvr-float">
              <a href="https://www.linkedin.com/in/chantal-brousseau/">{linkedIcon}</a>
          </div>
          <div className="footer-link hvr-float">
              <a href="mailto:chantalbrousseau@rogers.com">{mailIcon}</a>
          </div>
          <div className="footer-link hvr-float">
          <a href="#about">{resIcon}</a>
          </div>
      </div>
      </div>
      </div>

        <div class='photo-col'>
            <img className="link-avatar" src="/op2.png"></img>
            <div className="link-tags">
               <div className="link-tag"><span className="underline--github"><a href="https://github.com/ChantalMB">{gitIcon}</a></span></div>
               <div className="link-tag"><span className="underline--resume"><a href="#resume">{resIcon}</a></span></div>
               <div className="link-tag"><span className="underline--linkedin"><a href="https://www.linkedin.com/in/chantal-brousseau/">{linkedIcon}</a></span></div>
               <div className="link-tag"><span className="underline--email"><a href="mailto:chantalbrousseau@rogers.com">{mailIcon}</a></span></div>
            </div>
        </div>
    </div>
  );
}

export default About;
