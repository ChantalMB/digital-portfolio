import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar} from '@fortawesome/free-solid-svg-icons';


function TimelineComponent() {
  const starIcon = <FontAwesomeIcon icon={faStar} />
  //const volIcon = <FontAwesomeIcon id='vol-icon' icon={faHandsHelping} color="#083f49" />
  //const hokIcon = <i id='work-icon' className='icon-hok' />
  //const cuIcon = <i id='work-icon' className='icon-cu' />



  return (
    <div className="timeline">
    <VerticalTimeline className="vertical-timeline-custom-line">

    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: '#96ccbf', color: '#071e22' }}
      contentArrowStyle={{ borderRight: '7px solid #96ccbf' }}
      date="Feb 2021 - Present"
      iconStyle={{ background: '#96ccbf', color: '#071e22', 'font-size': '42.7px' }}
      // icon={cuIcon}
    >

      <div class="skill-set">
          <div role="button" class="skills-tag-work">Python</div>
          <div role="button" class="skills-tag-work">Juypter Notebook</div>
          <div role="button" class="skills-tag-work">Twine</div>
          <div role="button" class="skills-tag-work">Git</div>
          <div role="button" class="skills-tag-work">R</div>
          
      </div>

      <h3 className="vertical-timeline-element-title">Digital Humanities Research Support Services</h3>
      <h4 className="vertical-timeline-element-subtitle">MacOdrum Library</h4>
      <p>
      Working with Interdisciplinary Studies librarian Martha Attridge Bufton to develop a series of introductory workshops to the digital humanities and associated technical foundations for Carleton University's MacOdrum Library. 
      </p>
    </VerticalTimelineElement>

    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: '#96ccbf', color: '#071e22' }}
      contentArrowStyle={{ borderRight: '7px solid #96ccbf' }}
      date="Sept 2020 - Jan 2021"
      iconStyle={{ background: '#96ccbf', color: '#071e22', 'font-size': '42.7px' }}
      // icon={cuIcon}
    >

      <div class="skill-set">
          <div role="button" class="skills-tag-work">Python</div>
          <div role="button" class="skills-tag-work">Juypter Notebook</div>
          <div role="button" class="skills-tag-work">R</div>
          <div role="button" class="skills-tag-work">Git</div>
          <div role="button" class="skills-tag-work">Hugo</div>
          
      </div>

      <h3 className="vertical-timeline-element-title">Student Partner</h3>
      <h4 className="vertical-timeline-element-subtitle">Carleton University</h4>
      <p>
      Students As Partners Program. Collaborated with Dr. Shawn Graham in developing the Winter 2021 course <a href="https://dhmuse.netlify.app/">HIST4916A: Digital History + Museums</a>
      </p>
    </VerticalTimelineElement>

    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: '#FF994F', color: '#071e22' }}
      contentArrowStyle={{ borderRight: '7px solid  #FF994F' }}
      date="Fall 2020 - present"
      iconStyle={{ background: '#FF994F', color: '#071e22', 'font-size': '21.5px' }}
      // icon={volIcon}
    >

      <div class="skill-set">
          <div role="button" class="skills-tag-vol">Adobe Suite</div>
          <div role="button" class="skills-tag-vol">Canva</div>
          <div role="button" class="skills-tag-vol">Hootsuite</div>
      </div>

      <h3 className="vertical-timeline-element-title">Communications Officer</h3>
      <h4 className="vertical-timeline-element-subtitle">Carleton Computer Science Society</h4>
      <p>
      Responsible for designing social media content and promotional materials. Helping to maintain the CCSS social media accounts and replying to student inquiries. Moderating the CCSS virtual Discord community to ensure appropriate conduct and encourage inclusion and participation.
      </p>
    </VerticalTimelineElement>

    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: '#96ccbf', color: '#071e22' }}
      contentArrowStyle={{ borderRight: '7px solid  #96ccbf' }}
      date="Fall 2019 - Winter 2020"
      iconStyle={{ background: '#96ccbf', color: '#071e22', 'font-size': '42.7px' }}
      // icon={cuIcon}
    >

      <div class="skill-set">
          <div role="button" class="skills-tag-work">Javascript</div>
          <div role="button" class="skills-tag-work">Markdown</div>
          <div role="button" class="skills-tag-work">HTML</div>
      </div>

      <h3 className="vertical-timeline-element-title">Undergraduate Research Fellow</h3>
      <h4 className="vertical-timeline-element-subtitle">Carleton University</h4>
      <p>
      George Garth Graham Undergraduate Digital History Research Fellowship. Explored the history of urbanism in ancient Rome through the lense of city-building
      games.
      </p>
    </VerticalTimelineElement>

    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: '#FF994F', color: '#071e22' }}
      contentArrowStyle={{ borderRight: '7px solid  #FF994F' }}
      date="Fall 2019 - Winter 2020"
      iconStyle={{ background: '#FF994F', color: '#071e22', 'font-size': '21.5px' }}
      // icon={volIcon}
    >

      <div class="skill-set">
          <div role="button" class="skills-tag-vol">Adobe Suite</div>
          <div role="button" class="skills-tag-vol">Figma</div>
          <div role="button" class="skills-tag-vol">Canva</div>
      </div>

      <h3 className="vertical-timeline-element-title">Administrator</h3>
      <h4 className="vertical-timeline-element-subtitle">Carleton Computer Science Society</h4>
      <p>
      Managed the CCSS (Carleton Computer Science Society) social media and replied to inquiries across all platforms. Collaborated with other members on the Board of Directors in the organization and execution of events.
      </p>
    </VerticalTimelineElement>

    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: '#96ccbf', color: '#071e22' }}
      contentArrowStyle={{ borderRight: '7px solid  #96ccbf' }}
      date="Summer 2019"
      iconStyle={{ background: '#96ccbf', color: '#071e22', 'font-size': '42.7px' }}
      // icon={hokIcon}
    >
        <div class="skill-set">
            <div role="button" class="skills-tag-work">Python</div>
            <div role="button" class="skills-tag-work">Bluebeam Revu</div>
            <div role="button" class="skills-tag-work">Excel</div>
        </div>

        <h3 className="vertical-timeline-element-title">Summer Intern (Heritage Team)</h3>
        <h4 className="vertical-timeline-element-subtitle">HOK</h4>
        <p>
        Centre Block Rehabilitation Project. Gathered and recorded information on heritage and non-heritage assets being removed
        from the Centre Block, then entered aforementioned heritage assets into a database for long-term tracking.
        </p>

    </VerticalTimelineElement>

    <VerticalTimelineElement
    className="vertical-timeline-element--work"
    iconStyle={{ background: '#083f49', color: '#fff0e3', 'font-size': '21.9px' }}
    icon={starIcon}
    />

    </VerticalTimeline>
    </div>
  );
}

export default TimelineComponent;
