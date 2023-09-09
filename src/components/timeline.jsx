import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faBriefcase, faAppleWhole, faBookBookmark, faHandshakeAngle } from '@fortawesome/free-solid-svg-icons';

const experience = [ 
  {
    title: "Contract Instructor",
    location: "MacOdrum Library",
    date: "August 2022 - Present",
    description: "Teaching workshops focused on the fundamentals of computer science and programming in Python for those without prior experience but interested in digital humanities.",
    skills: ["Python", "Jupyter Notebook", "Git", "Markdown", "Hugo"],
    icon: "teaching"
  },
  {
    title: "Digital Humanities Research Support",
    location: "MacOdrum Library",
    date: "February 2021 - Present",
    description: "Primary focus working with Interdisciplinary Studies librarian Martha Attridge Bufton to develop a series of introductory workshops to the digital humanities and associated technical foundations for Carleton University's MacOdrum Library. Further helped advance other digital humanities initiatives within the library using knowledge of programming and related technology. Currently producing a Twine version of 'Do We Take Shelter?', a game-based learning activity on identifying primary sources.",
    skills: ["Python", "Juypter Notebook", "Twine", "Git", "R"],
    icon: "professional"
  },
  {
    title: "Research Assistant- ISSAP",
    location: "Carleton University",
    date: "January 2022 - January 2023",
    description: "Worked on the International Space Station Archaeological Project (ISSAP) as part of a joint venture led by Dr Justin Walsh (Chapman University, Orange, CA, USA) and Dr Alice Gorman (Flinders University, Adelaide) conducting the first full-scale investigation of material culture of a human habitat in space. Created a bespoke application using Svelte for the annotation of images sent to the team of ISSAP researchers from the International Space Station. Providing ongoing support as needed.",
    skills: ["Svelte", "Javascript", "HTML/CSS", "Git", "Docker"],
    icon: "research"
  },
  {
    title: "Teaching Assistant- HIST 2000A: Medieval Europe",
    location: "Carleton University",
    date: "September 2022 - May 2023",
    description: "Facilitated in-class activities, group discussions, and debates to encourage critical thinking and enhance understanding of historical content among students. Designed and led supplementary discussion topics to complement weekly lectures, promoting deeper engagement with course material. Managed the distribution of course materials such as lectures and assignments across digital platforms. Ensured the accessibility of course materials through methods such as adding captions to video materials. Collaborated with fellow TAs and course instructor through regular meetings to share insights and pedagogical approaches ensuring consistency and alignment in course content and assessment strategies.",
    skills: ["MS Teams", "Brightspace", "MS Office Suite"],
    icon: "teaching"
  },
  {
    title: "Research Assistant- New Organigram Project",
    location: "Carleton University",
    date: "September 2021 - May 2023",
    description: "Worked on The New Organigram Project: A Macroscopic View of the Illicit Antiquities Trade, a collaborative project led by digital archaeologists Dr Shawn Graham and Dr Donna Yates at Maastricht University. Developed ways to automate the generation of knowledge graphs from newspaper articles, auction catalogues, the Panama Papers, and other public sources to predict otherwise hidden relationships within the illicit antiquities trade. Research focused on Natural Language Processing techniques for Relationship Extraction for the training of knowledge graph embedding models.",
    skills: ["Python", "Ampligraph", "GPT", "SpaCy", "NLTK"],
    icon: "research"
  },
  {
    title: "Contract Researcher- GoC Contract Analysis",
    location: "School of Public Policy and Administration at Carleton University",
    date: "April 2022 - October 2022",
    description: "Worked with Dr Amanda Clarke and Sean Boots at the School of Public Policy and Administration at Carleton University on technology to aid their research analyzing Government of Canada procurement contracts. Cleaned data on procurement data and used it to train a BERT-based text classifier to identify and categorize contracts that lacked descriptive information.",
    skills: ["Python", "Tensorflow", "Keras", "R", "R Markdown"],
    icon: "research"
  },
  {
    title: "Teaching Assistant- HIST 1001A: The Making of Europe",
    location: "Carleton University",
    date: "September 2021 - May 2022",
    description: "Graded and provided constructive feedback on written assignments and examinations, aiding students in improving their research and writing skills. Assisted students in developing research topics, refining research methodologies, and structuring essays. Managed course-related administrative tasks, such as directing students to university resources, maintaining attendance records, organizing course materials, and ensuring the efficient functioning of digital platforms (e.g., Brightspace).",
    skills: ["Brightspace", "MS Office Suite", "Zoom"],
    icon: "teaching"
  },
  {
    title: "Communications Officer",
    location: "Carleton Computer Science Society",
    date: "August 2020 - May 2021",
    description: "Responsible for designing social media content and promotional materials. Helping to maintain the CCSS social media accounts and replying to student inquiries. Moderating the CCSS virtual Discord community to ensure appropriate conduct and encourage inclusion and participation.",
    skills: ["Adobe Suite", "Figma", "Canva"],
    icon: "vol"
  },
  {
    title: "Student Partner",
    location: "Carleton University",
    date: "September 2020 - January 2021",
    description: "Collaborating with Dr Shawn Graham in developing the Winter 2021 course HIST4916A: Digital History + Museums. Collecting, cleaning, and formatting sets of data from Ottawa GLAM (Galleries, Libraries, Archives, and Museums) institutions for students to use in creating a GLAM workbench. Building tutorials for applications such as Jupyter Notebook and RStudio to aid students in gaining the technical skills needed for the course. Compiling relevant additional resources for students to utilize beyond the course content. Contributing to the creation of the course website.",
    skills: ["Python", "Juypter Notebook", "Hugo", "Git", "R"],
    icon: "research"
  },
  {
    title: "Undergraduate Research Fellow",
    location: "Carleton University",
    date: "October 2019 - April 2020",
    description: "George Garth Graham Undergraduate Digital History Research Fellowship. Explored the history of urbanism in ancient Rome through the lense of city-building games.",
    skills: ["Javascript", "HTML", "Markdown"],
    icon: "research"
  },
  {
    title: "Administrator",
    location: "Carleton Computer Science Society",
    date: "August 2019 - May 2020",
    description: "Managed the CCSS (Carleton Computer Science Society) social media and replied to inquiries across all platforms. Collaborated with other members on the Board of Directors in the organization and execution of events.",
    skills: ["Adobe Suite", "Hootsuite", "Canva"],
    icon: "vol"
  },
  {
    title: "HOK Summer Intern (Room-by-Room/Heritage Team)",
    location: "CENTRUS- HOK Architecture-Engineering Firm",
    date: "Summer 2019",
    description: "Centre Block Rehabilitation Project. Gathered and recorded information on heritage and non-heritage assets being removed from the Centre Block. Entered aforementioned heritage assets into a database for long-term tracking. Wrote scripts to automate the comparison of data using Python. Utilized architectural models and floor plans to locate missing assets. Revised preliminary forms generated for heritage assets assessed on-site for correctness.",
    skills: ["Python", "Bluebeam Revu", "Excel"],
    icon: "professional"
  }
];

function TimelineComponent() {
  const starIcon = <FontAwesomeIcon icon={faStar} />
 
  return (
    <div className="timeline">
    <VerticalTimeline className="vertical-timeline-custom-line">

    {experience.map((position, index) => (
      <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: '#96ccbf', color: '#071e22' }}
      contentArrowStyle={{ borderRight: '7px solid #96ccbf' }}
      date={position.date}
      iconStyle={{ background: '#96ccbf', color: '#071e22', 'font-size': '42.7px' }}
      icon={(() => {
        if (position.icon == 'professional'){
            return (
              <FontAwesomeIcon icon={faBriefcase} />
            )
        } else if (position.icon == 'research') {
            return (
              <FontAwesomeIcon icon={faBookBookmark} />
            )
        } else if (position.icon == 'teaching') {
            return (
              <FontAwesomeIcon icon={faAppleWhole} />
            )
        } else if (position.icon == 'vol') {
            return (
              <FontAwesomeIcon icon={faHandshakeAngle} />
            )
        }
        
        return null;
      })()}
    >
      <div className="skill-set">
      {position.skills.map((skill, index) => ( 
        <div role="button" className="skills-tag-work">{skill}</div>
      ))}
      </div>

      <h3 className="vertical-timeline-element-title">{position.title}</h3>
      <h4 className="vertical-timeline-element-subtitle">{position.location}</h4>
      <p>
        {position.description}
      </p>
      
    </VerticalTimelineElement>
    ))}

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
