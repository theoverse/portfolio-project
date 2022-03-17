import React from "react";
import { Link } from "react-scroll/modules";
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    RedditShareButton,
    RedditIcon,
    LinkedinShareButton,
    LinkedinIcon
} from "react-share";

const Footer = () => {
    return (
        <div id="footer" className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            <p>Atlanta Georgia, Main St 2020, office #223</p>
                        </div>
                        <div className="d-flex">
                            <a href="tel:555-555-5555">+1(210)555-5555</a>
                        </div>
                        <div className="d-flex">
                            <p>theoverse.dev@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <Link to="home" offset={-60} className="footer-nav">Home</Link><br />
                                <Link to="about" offset={-60} className="footer-nav">About Me</Link><br />
                                <Link to="interests" offset={-60} className="footer-nav">Interests</Link>
                            </div>
                            <div className="col">
                                <Link to="experience" offset={-60} className="footer-nav">Experience</Link><br />
                                <Link to="portfolio" offset={-60} className="footer-nav">Portfolio</Link><br />
                                <Link to="contacts" offset={-60} className="footer-nav">Contacts</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                        <div className="d-flex justify-content-center">
                            <FacebookShareButton
                                url={"https://www.facebook.com/"}
                                quote={"FullStack Developer"}
                                hashtag={"#javascript"}
                            >
                                <FacebookIcon className="mx-3" size={36} />
                            </FacebookShareButton>
                            <TwitterShareButton
                                url={"https://twitter.com/"}
                                quote={"FullStack Developer"}
                                hashtag={"#javascript"}
                            >
                                <TwitterIcon className="mx-3" size={36} />
                            </TwitterShareButton>
                            <RedditShareButton
                                url={"https://www.reddit.com/"}
                                quote={"FullStack Developer"}
                                hashtag={"#javascript"}
                            >
                                <RedditIcon className="mx-3" size={36} />
                            </RedditShareButton>
                            <LinkedinShareButton
                                url={"https://www.reddit.com/"}
                                quote={"FullStack Developer"}
                                hashtag={"#javascript"}
                            >
                                <LinkedinIcon className="mx-3" size={36} />
                            </LinkedinShareButton>
                        </div>
                        <p className="pt-3 text-center">
                            Copyright&copy;
                            {new Date().getFullYear()}&nbsp;Theoverse | All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer