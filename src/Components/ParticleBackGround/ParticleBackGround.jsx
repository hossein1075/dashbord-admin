import { useEffect, useState, useCallback } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadAll } from "@tsparticles/all";

function ParticlesBackground() {
    const [ready, setReady] = useState(false);

    const particlesLoaded = useCallback((container) => {
        console.log("Particles Loaded:", container);
    }, []);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadAll(engine);
        }).then(() => {
            setReady(true);
        });
    }, []);

    if (!ready) return null;

    return (
       <Particles
    id="tsparticles"
    className="particles-bg"
    options={{
        background: {
            color: "#1b1e34",
        },
        particles: {
            number: {
                value: 6,
                density: {
                    enable: true,
                    area: 800,
                },
            },
            color: {
                value: "#000000",
            },
            shape: {
                type: "polygon",
                polygon: {
                    sides: 6,
                },
            },
            opacity: {
                value: 0.3,
                random: true,
            },
            size: {
                value: 160,
                animation: {
                    enable: true,
                    speed: 10,
                    minimumValue: 40,
                    sync: false,
                },
            },
            links: {
                enable: false,
            },
            move: {
                enable: true,
                speed: 8,
                direction: "none",
                random: false,
                straight: false,
                outModes: {
                    default: "out",
                },
            },
        },
        interactivity: {
            events: {
                onHover: {
                    enable: false,
                },
                onClick: {
                    enable: false,
                },
                resize: true,
            },
        },
        detectRetina: true,
    }}
/>

    );
}

export default ParticlesBackground;
