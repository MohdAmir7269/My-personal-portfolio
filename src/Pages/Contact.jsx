import React from "react";
import img from "../assets/Images/Myimg.jpeg";
import resume from "../assets/Images/Mohd_Amir_Resume.pdf"; // ✅ Proper Import
import { Link } from "react-router-dom";
import "../index.css";

const Contact = () => {
  return (
    <div className="container-fluid bg-dark">
      <div className="row pb-4">
        <div className="col-sm-12 bg-dark py-1">
          <div className="row p-3" style={{ minHeight: "640px" }}>

            {/* Dark side - Form */}
            <div className="col-sm-6 py-5" style={{ backgroundColor: "black", borderRadius: "10px 0px 0px 10px" }}>
              <h2 className="text-white fw-bold text-center">Contact Us</h2>

              <label className="text-light ms-5">Full Name</label><br />
              <input
                type="text"
                placeholder="Enter your Name"
                className="border border-primary ms-5 rounded-3 pf-input-hover"
                style={{ height: "40px", width: "80%", backgroundColor: "black", color: "white", outline: "none" }}
              /><br /><br />

              <label className="text-light ms-5">Enter your Email</label><br />
              <input
                type="email"
                placeholder="Enter your Email"
                className="border border-primary rounded-3 ms-5 pf-input-hover"
                style={{ height: "40px", width: "80%", backgroundColor: "black", color: "white", outline: "none" }}
              /><br /><br />

              <label className="text-light ms-5">Phone Number</label><br />
              <input
                type="text"
                placeholder="Enter your phone Number"
                className="border border-primary rounded-3 ms-5 pf-input-hover"
                style={{ height: "40px", width: "80%", backgroundColor: "black", color: "white", outline: "none" }}
              /><br /><br />

              <label className="text-light ms-5">Message</label><br />
              <input
                type="text"
                placeholder="Type your message..."
                className="pb-5 border border-primary rounded-3 ms-5 pf-input-hover"
                style={{ height: "22%", width: "80%", backgroundColor: "black", color: "white", outline: "none" }}
              />

              <button
                className="bg-primary border-0 text-white fw-bold rounded-3 ms-5 mt-4 pf-submit-hover"
                style={{ height: "40px", width: "80%" }}
              >
                Send Message
              </button>
            </div>

            {/* Blue side - Info + Image */}
            <div className="col-sm-6 bg-primary py-5" style={{ borderRadius: "0px 10px 10px 0px" }}>
              <div className="text-center mt-5 py-4">
                <div className="pf-avatar-wrap" style={{ display: "inline-block" }}>
                  <div className="pf-avatar-ring"></div>
                  <div className="pf-avatar-ring-bg"></div>
                  <img
                    className="pf-avatar-img rounded-circle"
                    src={img}
                    alt="Profile"
                    style={{ width: "90px", height: "90px", border: "2px solid white" }}
                  />
                </div>
              </div>
              <div className="text-center text-white">
                Phone: <Link to="/" className="text-white">7269096806</Link>
              </div>
              <div className="text-center text-white">
                Email: <Link to="/" className="text-white">mohdamir7269@gmail.com</Link>
              </div>
              <div className="mt-3 mx-5 px-5">
                   <a
                               href={resume}
                               target="_blank"
                               rel="noopener noreferrer"
                             >
                               <button className=" btp text-white border-0 py-2 px-4 rounded-2 pf-btn-hover me-3">
                                 View Resume
                               </button>
                             </a>
                <button className="bg-white text-black border border-dark rounded-2 py-2 pf-btn-white-hover">
                  Contact Me
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;