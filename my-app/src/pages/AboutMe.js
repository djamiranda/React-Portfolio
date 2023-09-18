import React from "react";
import { Link } from "react-router-dom";
import coder from "../assets/img/profile/coder.png";
import { TypeAnimation } from "react-type-animation";

const AboutMe = (props) => {
    const tbu = () => {
        alert("Will be uploaded soon!");
    };

    return (
        <section className="main-content-section" id="about-me-section">
            <h2 className="main-content-section-header">About Me</h2>
            <div className="main-content-section-body">
                <div className="main-content-section-body-row">
                    <div id="intro-img">
                        <img src={coder} alt="avatar" />
                    </div>
                    <div id="intro-content">
                        <p id="intro-greeting">HELLO WORLD</p>
                        <p id="intro-name">I'm Daniel</p>
                        <TypeAnimation
                            sequence={[
                                `Full Stack Developer`,
                                5000,
                                '',
                            ]}
                            wrapper="p"
                            speed={40}
                            repeat={Infinity}
                            cursor={true}
                            className={'intro-position'}
                            style={{ color: 'var(--yellow)' }}
                        />
                    </div>
                </div>

                <div className="main-content-section-body-row">
                    <p>Hi! My name is Daniel Miranda</p>
                    <p>Here are the technologies that I can use:</p>
                    <ul className="tech-ul">
                        <li>
                            Languages:
                            <span> JavaScript (ES6, Node.js), HTML5, CSS, SQL</span>
                        </li>
                        <li>
                            Frameworks/Libraries:
                            <span> Express, jQuery, React, Bootstrap</span>
                        </li>
                        <li>
                            Databases:
                            <span> MySQL, MongoDB</span>
                        </li>
                        <li>Tools:
                            <span> Visual Studio Code, Compass, Insomnia, Github</span>
                        </li>
                    </ul>
                    <p>Check my <Link to="/projects" className="link"><span className="about-me-link">portfolio</span></Link> and <Link to="https://docs.google.com/document/d/1UZM7aMWfNMZxkISy3hMDI9E42OgMyGxhT_WiVUOuENw/edit?usp=sharing" target="_blank" className="link"><span className="about-me-link">resume</span></Link> to learn more about me!</p>
                </div>
            </div>
        </section >
    );
};

export default AboutMe;