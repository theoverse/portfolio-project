import React from "react";
import Typed from "react-typed";
import Particles from 'react-tsparticles';
import { Link } from "react-scroll/modules";

const Header = () => {
    const particlesInit = (main) => {
        console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };
    return (
        <div id="home" className="header-wraper">
            <Particles
                id="tsparticles"
                className="partices-canvas"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    fullScreen: false,
                    background: {
                        color: {
                            value: "none",
                        },
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            bubble: {
                                distance: 400,
                                duration: 2,
                                opacity: 0.8,
                                size: 35,
                            },
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#f9ab00",
                        },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: false,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outMode: "bounce",
                            random: false,
                            speed: 2,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 900,
                            },
                            value: 40,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            random: true,
                            value: 5,
                        },
                    },
                    detectRetina: true,
                }}
            />
            <div className="main-info">
                <h1>web development and websites promotions</h1>
                <Typed
                    className="typed-text"
                    strings={["Web Design", "Web Development", "Animation", "Game Development"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <Link to="contacts" className="btn-main-offer">contact me</Link>
            </div>
        </div>
    )
}

export default Header