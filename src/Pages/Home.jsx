// import React from "react";
// import img from "../assets/Images/Myimg.jpeg";
// import { Link } from "react-router-dom";
// const Home = () => {
//   return (
//     <div className="container-fluid bg-dark">
//      <div className="row p-3 pb-5 ">
//          <div className="col-sm-12 bg-dark py-1 ">
//           <div className="row ">
//             <div className="col-sm-6 bg-primary py-5 " style={{borderRadius:"10px 0px 0px 10px"}}>
//               <div className="text-center ">
//                 <img className=" rounded-circle " id="img-box" src={img}
//                   alt="Profile"
//                   style={{ width: "300px", }} /></div>
//             </div>
//             <div className="col-sm-6  py-4 " style={{backgroundColor:"black", borderRadius:"0px 10px 10px 0px"}}>
//               <h1 className="text-primary mt-3 px-5 fs-1 fw-bold">Hi, I'm Mohd Amir </h1>
//               <h4 className="text-white  mt-3 px-5 ">I'm a <span className="text-primary">MERN Stack Developer</span></h4>
//               <p className="text-white fs-5 text-state mt-3 px-5">I'm a MERN Stack Developer from Noida, India. I specialize in building full-stack applications using MongoDB, Express.js,
//                  React, and Node.js. I focus on REST APIs, Redux state management,
//                   secure backends, and performance optimization. Let's build something 
//                   amazing together!</p>
//               <div></div>
//                <Link to="/"><button className="bg-primary  text-white border-0 mx-5 py-2 rounded-2 ">View Resume</button></Link>
//               <Link to="/"><button className="bg-dark text-primary border border-primary rounded-2 py-2 ">Contact Me</button></Link>
//               </div>
//           </div>
//         </div>
//      </div>
//       </div>


//   );
// };

// export default Home;


import React from "react";
import img from "../assets/Images/Myimg.jpeg";
import resume from "../assets/Images/Mohammad.Amir.pdf"; // ✅ Proper Import
import { Link } from "react-router-dom";
import "../index.css";

const Home = () => {
  return (
    <div className="container-fluid bg-dark">
      <div className="row p-3 ">
        <div className="col-sm-12 bg-dark pb-0">
          <div className="row">

            {/* Blue side - Image */}
            <div
              className="col-sm-6 bg-primary py-5"
              style={{ borderRadius: "10px 0px 0px 10px" }}
            >
              <div className="text-center">
                <div
                  className="pf-profile-wrap"
                  style={{ display: "inline-block" }}
                >
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

            {/* Dark side - Content */}
            <div
              className="col-sm-6 py-4"
              style={{
                backgroundColor: "black",
                borderRadius: "0px 10px 10px 0px",
              }}
            >
              <h1 className="text-primary mt-3 px-5 fs-1 fw-bold">
                Hi, I'm Mohd Amir
              </h1>

              <h4 className="text-white mt-3 px-5">
                I'm a{" "}
                <span className="text-primary">MERN Stack Developer</span>
              </h4>

              <p className="text-white fs-5 mt-3 px-5">
                I'm a MERN Stack Developer from Lucknow, India. I specialize in
                building full-stack applications using MongoDB, Express.js,
                React, and Node.js. I focus on REST APIs, Redux state
                management, secure backends, and performance optimization.
                Let's build something amazing together!
              </p>

              {/* Buttons */}
              <div className="mt-4 px-5">

                {/* ✅ Resume Button (Working) */}
                <a
                  href={resume}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-primary text-white border-0 py-2 px-4 rounded-2 pf-btn-hover me-3">
                    View Resume
                  </button>
                </a>

                {/* Contact Button */}
                <Link to="/Contact">
                  <button className="bg-dark text-primary border border-primary rounded-2 py-2 px-4 pf-btn-ghost-hover">
                    Contact Me
                  </button>
                </Link>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;