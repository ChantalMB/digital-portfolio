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
            <p className="has-line-data" data-line-start="0" data-line-end="1"><i>Hello.</i> I'm Chantal. My undergraduate studies were in history and computer science, and now I've recently completed a combined master's degree in <b>History &amp; Data Science</b> at Carleton University under the supervision of <b><u><a href="https://shawngraham.github.io/" target="_blank"/></u></b>Dr Shawn Graham. My master's research project, <a href="https://chantalmb.github.io/MRE-MitM-2023/" target="_blank">"Metadata in the Margins: Reshaping Archives as Data Through Early Modern Marginalia"</a>, centered around the creation of an application to situate the data machine learning models are built on. The functionality of my application was then demonstrated through a case study on the automated detection of marginalia found in early modern texts.</p>
            <br/>
            <p>Unsurprisingly, with this unusual combination of education and research, my primary area of interest is <b>digital history &amp; humanities</b>, with a current focus on social history in <b>Early Modern Europe</b>, particularly in relation to the <b>history of objects and the book.</b></p>
            <br/>
            <p className="has-line-data" data-line-start="2" data-line-end="3">I'm also interested in the more practical applications of these concepts, exploring the ways that cultural artefacts are being digitally preserved, and how this information can be made easily accessible to the public or aide in community building and reparations.</p>
        </div>

      </div>

        <div className='photo-col'>
            <img className="link-avatar" src="/images/op2.png" alt=""></img>
            <div className="link-tags">
               <div className="link-tag"><span className="underline--github"><a href="https://github.com/ChantalMB" target="_blank">{gitIcon}</a></span></div>
               <div className="link-tag"><span className="underline--resume"><a href="/cv">{resIcon}</a></span></div>
               <div className="link-tag"><span className="underline--linkedin"><a href="https://www.linkedin.com/in/chantal-brousseau/" target="_blank">{linkedIcon}</a></span></div>
               <div className="link-tag"><span className="underline--email"><a href="mailto:chantal.brousseau@carleton.ca">{mailIcon}</a></span></div>
            </div>
        </div>
    </div>
  );
}

export default About;
