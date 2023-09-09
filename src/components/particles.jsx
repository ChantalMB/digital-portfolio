import React from 'react';

import { useCallback } from "react";
import Particles from 'react-tsparticles';
import { loadSlim } from "tsparticles-slim";

function Particle() {
    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadFull(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);
  return (
        <Particles className="page-particles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
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
                    enable: true,
                    speed: 1,
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: { enable: false, rotateX: 600, rotateY: 600 }
                }
             }
          }}
        />
    );
  }

export default Particle;
