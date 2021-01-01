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

        <div className= "desc">
            <p class="has-line-data" data-line-start="0" data-line-end="1">My name is Chantal, and presently I’m a 4th year undergraduate at Carleton University studying history with a minor in computer science. Unsurprisingly, with that combination, my primary area of interest is <b>digital history &amp; humanities</b>, with a current focus on social history in Early Modern Europe.</p>
            <p class="has-line-data" data-line-start="2" data-line-end="3">I’m also interested in the more practical applications of these concepts, exploring the ways that cultural artefacts are being digitally preserved, and how this information can be made easily accessible to the public or aide in community building and reparations.</p>
            <p class="has-line-data" data-line-start="4" data-line-end="5">For these reasons, I am <b>currently applying </b> to graduate programs in <b>library &amp; information science</b> in hopes of starting my master’s degree beginning in Fall 2021.</p>
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
            <img className="link-avatar" src="/op2.png" alt=""></img>
            <div className="link-tags">
               <div className="link-tag"><span className="underline--github"><a href="https://github.com/ChantalMB">{gitIcon}</a></span></div>
               <div className="link-tag"><span className="underline--resume"><a href="https://drive.google.com/file/d/1aChOeqM4TxwNNZQ1bnrvi2Er9wuUeMX9/view?usp=sharing">{resIcon}</a></span></div>
               <div className="link-tag"><span className="underline--linkedin"><a href="https://www.linkedin.com/in/chantal-brousseau/">{linkedIcon}</a></span></div>
               <div className="link-tag"><span className="underline--email"><a href="mailto:chantalbrousseau@rogers.com">{mailIcon}</a></span></div>
            </div>
        </div>
    </div>
  );
}

export default About;
