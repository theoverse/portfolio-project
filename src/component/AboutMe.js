import React from "react";
import Author from "../profile-img.jpg";

const AboutMe = () => {
    return (
        <div id="about" className="container py-5 test">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                        <img className="profile-img" src={Author} alt="author..." />
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">About Me</h1>
                    <p className="about-paragraph">
                        Hi, I'm Joshua. I'm a full stack developer with a preference for backend development and web technologies.
                        I'm someone who can work on both back-end and front-end of systems using a range of different technologies, frameworks and languages.

                        I have knowledge of multiple languages and libraries (e.g. HTML/ CSS, JavaScript) and JavaScript frameworks (e.g. React, NodeJS, ExpressJS).
                        I also have some familiarity with databases (e.g. MySQL, MongoDB), web servers (e.g. Apache), OSs (e.g. Windows, several Linux Distros) and much more.

                        My most used stack Would be MERN stack, and my strongest language would be JavaScript with some knowledge of Python, Java, and Scala.
                        I'm flexible when it comes to technology, I learn quickly, I have great attention to detail, I work well as an individual and in a team environment,
                        and problem-solving comes second nature to me. If you would like to get in contact with me, please send me a message below.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe