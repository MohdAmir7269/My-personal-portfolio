import React from "react";
import img from "../assets/Images/Myimg.jpeg";
import "../index.css";

const About = () => {
  return (
    <div className="container-fluid bg-dark">
      <div className="row p-2 p-md-3">
        <div className="col-12 bg-dark py-1">
          <div className="row g-0 flex-column-reverse flex-md-row">

            {/* Dark side - Content */}
            <div
              className="col-12 col-md-6 py-4"
              style={{
                backgroundColor: "black",
                borderRadius: "0 0 10px 10px", // mobile: bottom rounded
              }}
            >
              <h1 className="text-primary mt-3 px-3 px-md-5 fs-1 fw-bold">About Me</h1>
              <h4 className="text-white mt-3 px-3 px-md-5">
                I'm a <span className="text-primary">MERN Stack Developer</span>
              </h4>
              <br />
              <p className="text-white mt-3 px-3 px-md-5" style={{ fontSize: "16px" }}>
                Hi, I'm Mohd Amir, a MERN Stack Developer from Lucknow, Uttar Pradesh,
                India. I enjoy building full-stack web applications that are fast,
                responsive, and user-friendly.
                <br /><br />
                I connect front-end and back-end seamlessly using RESTful APIs, manage
                state efficiently with Redux, and focus on secure, scalable, and
                responsive web apps.
              </p>

              <div className="px-3 px-md-5 mt-2">
                <h4 className="text-white">Skills</h4>
                <div className="d-flex flex-wrap gap-2 py-2">
                  {["Javascript", "React", "Node.js", "Git", "NPM", "Express", "MongoDB"].map((skill) => (
                    <button key={skill} className="btn btn-primary pf-skill-btn">
                      {skill}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Blue side - Image */}
            <div
              className="col-12 col-md-6 bg-primary py-4 py-md-5 text-center"
              style={{
                borderRadius: "10px 10px 0 0", // mobile: top rounded
              }}
            >
              <div className="pf-profile-wrap d-inline-block">
                <div className="pf-profile-ring"></div>
                <div className="pf-profile-ring-bg"></div>
                <img
                  className="pf-profile-img rounded-circle"
                  src={img}
                  alt="Profile"
                  style={{
                    width: "clamp(180px, 50vw, 300px)",
                    height: "clamp(180px, 50vw, 300px)",
                  }}
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;