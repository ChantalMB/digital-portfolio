import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';


function Footer() {
  const mailIcon = <FontAwesomeIcon icon={faEnvelope} />
  const gitIcon = <FontAwesomeIcon icon={faGithub} />
  const linkedIcon = <FontAwesomeIcon icon={faLinkedin} />
  return (
    <div className="footer">
        <div className="footer-links">
                <div className="footer-link hvr-float">
                    <a href="https://github.com/ChantalMB" target="_blank">{gitIcon}</a>
                </div>
                <div className="footer-link hvr-float">
                    <a href="mailto:chantal.brousseau@carleton.ca">{mailIcon}</a>
                </div>
                <div className="footer-link hvr-float">
                    <a href="https://www.linkedin.com/in/chantal-brousseau/" target="_blank">{linkedIcon}</a>
                </div>
            </div>
        <div style={{"color": "#fff0e3"}}> Copyright © Chantal Brousseau</div>
    </div>
  );
}

export default Footer;
