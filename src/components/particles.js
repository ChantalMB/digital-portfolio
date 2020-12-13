import React from 'react';
import Particles from 'react-particles-js';

function Particle() {
  return (
        <Particles className="page-particles"
          params={{
            particles: {
                number: {
                    value: 500,
                    density: {
                        enable: true,
                        value_area: 3500
                    }
                },
                color: {
                    value: 'random'
                },
                opacity: {
                    value: 0.5,
                    anim: {
                        enable: true
                    }
                },
                size: {
                    value: 7,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 3
                    }
                },
                line_linked: {
                    enable: false
                },
                move: {
                    speed: 1
                }
             }
          }}
        />
    );
  }

export default Particle;
