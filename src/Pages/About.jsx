
import React from "react";
import img from "../assets/Images/Myimg.jpeg";
import "../index.css";

const About = () => {
  return (
    <div className="container-fluid bg-dark">
      <div className="row p-3 pb-5">
        <div className="col-sm-12 bg-dark py-1">
          <div className="row">

            {/* Dark side - Content */}
            <div className="col-sm-6 py-4" style={{ backgroundColor: "black", borderRadius: "10px 0px 0px 10px" }}>
              <h1 className="text-primary mt-3 px-5 fs-1 fw-bold">About Me</h1>
              <h4 className="text-white mt-3 px-5">
                I'm a <span className="text-primary">MERN Stack Developer</span>
              </h4>
              <br />
              <p className="text-white text-state mt-3 px-5" style={{ fontSize: "17px" }}>
                Hi, I'm Mohd Amir, a MERN Stack Developer from Lucknow, Uttar Pradesh,
                India. I enjoy building full-stack web applications that are fast,
                responsive, and user-friendly.
                <br /><br />
                I connect front-end and back-end seamlessly using RESTful APIs, manage
                state efficiently with Redux, and focus on secure, scalable, and
                responsive web apps.
              </p>
              <div className="row">
                <h4 className="text-white mx-5">Skills</h4>
                <div className="col-sm-10 mx-5 py-3">
                  <button className="border-0 btn btn-primary me-3 mb-2 pf-skill-btn">Javascript</button>
                  <button className="border-0 btn btn-primary me-3 mb-2 pf-skill-btn">React</button>
                  <button className="border-0 btn btn-primary me-3 mb-2 pf-skill-btn">Node.js</button>
                  <button className="border-0 btn btn-primary me-3 mb-2 pf-skill-btn">Git</button>
                  <div className="mt-1">
                    <button className="border-0 btn btn-primary me-3 mb-2 pf-skill-btn">NPM</button>
                    <button className="border-0 btn btn-primary me-3 mb-2 pf-skill-btn">Express</button>
                    <button className="border-0 btn btn-primary me-3 mb-2 pf-skill-btn">MongoDB</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Blue side - Image */}
            <div className="col-sm-6 bg-primary py-5" style={{ borderRadius: "0px 10px 10px 0px" }}>
              <div className="text-center">
                <div className="pf-profile-wrap" style={{ display: "inline-block" }}>
                  <div className="pf-profile-ring"></div>
                  <div className="pf-profile-ring-bg"></div>
                  <img
                    className="pf-profile-img rounded-circle"
                    src={img}
                    alt="Profile"
                    style={{ width: "300px", height: "300px" }}
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;