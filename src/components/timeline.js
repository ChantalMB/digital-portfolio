import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar,faHandsHelping} from '@fortawesome/free-solid-svg-icons';


function TimelineComponent() {
  const starIcon = <FontAwesomeIcon icon={faStar} />
  const volIcon = <FontAwesomeIcon id='vol-icon' icon={faHandsHelping} color="#083f49" />
  const hokIcon = <i id='work-icon' className='icon-hok' />
  const cuIcon = <i id='work-icon' className='icon-cu' />



  return (
    <div className="timeline">
    <VerticalTimeline className="vertical-timeline-custom-line">

    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: '#96ccbf', color: '#071e22' }}
      contentArrowStyle={{ borderRight: '7px solid  #96ccbf' }}
      date="2011 - present"
      iconStyle={{ background: '#96ccbf', color: '#071e22', 'font-size': '42.7px' }}
      icon={cuIcon}
    >

      <div class="skill-set">
          <div role="button" class="skills-tag-work">Skill</div>
          <div role="button" class="skills-tag-work">Skill</div>
          <div role="button" class="skills-tag-work">Skill</div>
      </div>

      <h3 className="vertical-timeline-element-title">SaPP</h3>
      <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
      <p>
        Creative Direction, User Experience, Visual Design, Project Management, Team Leading
      </p>
    </VerticalTimelineElement>

    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: '#FF994F', color: '#071e22' }}
      contentArrowStyle={{ borderRight: '7px solid  #FF994F' }}
      date="2011 - present"
      iconStyle={{ background: '#FF994F', color: '#071e22', 'font-size': '21.5px' }}
      icon={volIcon}
    >

      <div class="skill-set">
          <div role="button" class="skills-tag-vol">Skill</div>
          <div role="button" class="skills-tag-vol">Skill</div>
          <div role="button" class="skills-tag-vol">Skill</div>
      </div>

      <h3 className="vertical-timeline-element-title">Comms</h3>
      <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
      <p>
        Creative Direction, User Experience, Visual Design, Project Management, Team Leading
      </p>
    </VerticalTimelineElement>

    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: '#96ccbf', color: '#071e22' }}
      contentArrowStyle={{ borderRight: '7px solid  #96ccbf' }}
      date="2011 - present"
      iconStyle={{ background: '#96ccbf', color: '#071e22', 'font-size': '42.7px' }}
      icon={cuIcon}
    >

      <div class="skill-set">
          <div role="button" class="skills-tag-work">Skill</div>
          <div role="button" class="skills-tag-work">Skill</div>
          <div role="button" class="skills-tag-work">Skill</div>
      </div>

      <h3 className="vertical-timeline-element-title">GGG</h3>
      <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
      <p>
        Creative Direction, User Experience, Visual Design, Project Management, Team Leading
      </p>
    </VerticalTimelineElement>

    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: '#FF994F', color: '#071e22' }}
      contentArrowStyle={{ borderRight: '7px solid  #FF994F' }}
      date="2011 - present"
      iconStyle={{ background: '#FF994F', color: '#071e22', 'font-size': '21.5px' }}
      icon={volIcon}
    >

      <div class="skill-set">
          <div role="button" class="skills-tag-vol">Skill</div>
          <div role="button" class="skills-tag-vol">Skill</div>
          <div role="button" class="skills-tag-vol">Skill</div>
      </div>

      <h3 className="vertical-timeline-element-title">Admin</h3>
      <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
      <p>
        Creative Direction, User Experience, Visual Design, Project Management, Team Leading
      </p>
    </VerticalTimelineElement>

    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: '#96ccbf', color: '#071e22' }}
      contentArrowStyle={{ borderRight: '7px solid  #96ccbf' }}
      date="2011 - present"
      iconStyle={{ background: '#96ccbf', color: '#071e22', 'font-size': '42.7px' }}
      icon={hokIcon}
    >
        <div class="skill-set">
            <div role="button" class="skills-tag-work">Skill</div>
            <div role="button" class="skills-tag-work">Skill</div>
            <div role="button" class="skills-tag-work">Skill</div>
        </div>

        <h3 className="vertical-timeline-element-title">HOK</h3>
        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
        <p>
          Creative Direction, User Experience, Visual Design, Project Management, Team Leading
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
