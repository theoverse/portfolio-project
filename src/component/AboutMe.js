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
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis suscipit molestiae saepe voluptate similique asperiores omnis!
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat repudiandae molestias delectus ut!

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore consequuntur laborum architecto sunt neque maxime voluptates!

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, debitis? Perferendis corporis quam culpa ipsam?
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto deleniti odit eaque.

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt maxime neque sit, tenetur veritatis expedita pariatur?
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo eos laudantium perspiciatis sit eaque?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, sit ullam!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe