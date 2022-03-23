import React from 'react'

const Experience = () => {
    return (
        <div id="experience" className="experience">
            <div className="d-flex justify-content-center my-5">
                <h1>Education & Experience</h1>
            </div>
            <div className="container experience-wrapper">
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2017-2020</h3>
                        <h4>Bachelor of Science in Information Technology (Cyber Security)</h4>
                        <p>
                            Graduated from Broward College on August 2020 with strong academic and personal background in IT combined with some IT technician experience
                        </p>
                    </div>
                </div>
                {/*  */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2019-2020</h3>
                        <h4>Information Technology Technician</h4>
                        <p>
                            While at Broward College, I worked with a team of technicians, and were tasked out to diagnose, repair and maintain hardware and software components to ensure their
                            functionality and readiness
                        </p>
                    </div>
                </div>
                {/*  */}
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2021-2021</h3>
                        <h4>Information Technology Specialist</h4>
                        <p>
                            Worked collaboratively with Gang Alternative Inc.'s IT contractor to manage daily operations of the entire IT department. Was responsible for GA's equipment and assets
                            such a laptops, phones, wireless hardware etc, including maintaining comprehensive assets registry and inventory across all business areas. Coordinate
                            the daily needs of on-site and remote employees, including immediate troubleshooting tasks
                        </p>
                    </div>
                </div>
                {/*  */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2021-2021</h3>
                        <h4>Claim Academy</h4>
                        <p>
                            Completed Claim Academies Full stack Java Developer course. During the course we focused on several different languages such as
                            Java, SQL, HTML, CSS, and JavaScript. We also worked with sevarl frameworks and technologies like React, Spring, Spring Boot, Hibernate, Bootstrap,
                            Tomcat, JSP, JDBC, Servlets. We learned about Object-oriented programming, SDLC, testing, and debugging code
                        </p>
                    </div>
                </div>
                {/*  */}
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>Present</h3>
                        <h4>Associate Software Engineer</h4>
                        <p>
                            Working with the implementation team to design and build configuration and design custom development objects. Continuously develop and Integrate
                            through building, testing, and deploying changes to live and test environments. Collaborating within a project team to solve complex problems
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience