import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop, faFileCode, faEye, faGamepad } from "@fortawesome/free-solid-svg-icons";

const Interests = () => {
    return (
        <div id="interests" className='interests'>
            <h1 className="py-5">My Interests</h1>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faDesktop} size="2x" /></div>
                            <h3>Web Design</h3>
                            <p>I approach each project individually and always focus on result.</p>
                        </div>
                    </div>
                    {/*  */}
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faFileCode} size="2x" /></div>
                            <h3>Web Development</h3>
                            <p>Building web sites and web applications with proven technologies.</p>
                        </div>
                    </div>
                    {/*  */}
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faEye} size="2x" /></div>
                            <h3>Animation</h3>
                            <p>Utilizing transitions, timeouts and durations to make content more entertaining and engaging.</p>
                        </div>
                    </div>
                    {/*  */}
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faGamepad} size="2x" /></div>
                            <h3>Game Development</h3>
                            <p>Take concepts and build them into a playable game for users. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Interests