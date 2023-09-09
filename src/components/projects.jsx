import React, { useState } from 'react';

const projectsData = [
  {
    title: 'RocketAnno',
    image: '/images/rocketanno.svg',
    description:
      'A humanities-centred image annotation application built with Electron and Svelte as a technical compnent of my master\'s degree research.',
    link: 'https://github.com/ChantalMB/MRE-RocketAnno'
  },
  {
    title: 'Detecting Marginalia',
    image: '/images/detecting.jpg',
    description:
      'A YOLOv7 model trained to detect marginalia in early modern texts, created as a technical compnent of my master\'s degree research.',
    link: 'https://github.com/ChantalMB/MRE-Detecting-Marginalia'
  },
  {
    title: 'The Met Map',
    image: '/images/met-map.png',
    description: 'An experiment mapping museum collections created for HIST5705F: Museums, National Identity and Public Memory taught by Anna Adamek, Director of the Curatorial Division at Ingenium. I geocoded the objects present in the Met\'s open-access collections then used Kepler.gl to map them.',
    link: 'https://github.com/ChantalMB/Met_Collections_Map/'
  },
  {
    title: 'Do We Take Shelter?',
    image: '/images/dwts.jpg',
    description:
      'Work-in-Progress Twine SugarCube game in development for librarian Martha Attridge Bufton. Teaches the evaluation of sources through roleplaying as families living in Manchester, England during the Christmas blitz of 1940.',
    link: 'https://github.com/ChantalMB/DWTS-game'
  },
  {
    title: 'History, Digitized.',
    image: '/images/hist-digi.png',
    description:
      'Winner of 2020 Digital Humanities Awards under "Best Exploration of DH Failure/Limitations". A website built to document my journey in digital humanities through weekly blog posts for one semester.',
    link: 'https://github.com/ChantalMB/histdigi-site'
  },
  {
    title: 'Observing Chapbooks',
    image: '/images/observing.jpg',
    description:
      'A visual essay and explorer for results of an experiment to detect images in the National Library of Scotland\'s Chapbook collections, with a database of results created using Datasette. Created for HIST5706F: Digital History, and the original inspiration for my master\'s research project.',
    link: 'https://github.com/ChantalMB/nls-chapbooks-illustrations'
  },
  {
    title: 'Knitting in Public',
    image: '/images/kip.png',
    description:
      'A final "performance" project on how knitting has historically been performed and how this has shaped who is considered a "knitter". Created for the course HIST5707: Narrativity and Performance in Public History as instructed by Dr David Dean.',
    link: 'https://github.com/ChantalMB/knitting-in-public'
  },
  {
    title: 'Fates of the Fair',
    image: '/images/witches.jpg',
    description:
      'Created for a seminar on witchcraft in the Early Modern period taught by Dr David Dean; I ported the Survey of Scottish Witchcraft database into a PostgreSQL database then used this to analyze the relationship between belief in fairies and the developments of witchcraft.',
    link: 'https://github.com/ChantalMB/ssw-site/'
  },
  {
    title: 'Digitized Devotions',
    image: '/images/devotions.jpg',
    description:
      'A proof-of-concept demonstrating how 3D models may be used in virtual exhibitions, created for HIST5003F: Historical Theory and Method taught by Dr Paul Nelles.',
    link: 'https://github.com/ChantalMB/medieval-badges/'
  },
  {
    title: 'A Dreadful Visitation',
    image: '/images/dreadful.jpg',
    description:
      'A short visual essay analysing the digitized contents of the infamous document, "London\'s Dreadful Visitation", which contains demographic data about London and its surrounding areas from the "final" plague year of 1665. This was produced as a final project for HIST3907A: Cultural History of Disease taught by Dr Lori Jones.',
    link: 'https://github.com/ChantalMB/dreadful-visitation-site/'
  },
];

function Carousel() {
  let [activeItem, setActiveItem] = useState(null);

  const scrollIntoView = (target) => {
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  };

  const handleItemClick = (index) => {
    setActiveItem(index === activeItem ? null : index);
  };

  return (
    <div className="carousel">
      {projectsData.map((project, index) => (
        <div className="item-content" key={index}>
          <div
            className={`item ${activeItem === index ? 'active' : ''}`}
            style={{ backgroundImage: `url(${project.image})` }}
            onClick={() => handleItemClick(index)}
          >
            <div className="item-desc">
              <h3>{project.title}</h3>
              <p className="slide-transition">{project.description}</p>
              <a href={project.link} target="_blank">Learn more</a>

            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
