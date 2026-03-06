// import React from 'react'
// import img1 from '../assets/Images/textTovoice.jpeg'
// import img2 from '../assets/Images/voicetotext1.jpeg'
// import img3 from '../assets/Images/slider.jpeg'
// import img4 from '../assets/Images/musicplayer.jpeg'
// import { Link } from "react-router-dom";

// const Project2 = () => {
//   return (
//     <>
//       <div className="container-fluid">
//         <div className="row" style={{ backgroundColor: "#9999" }}>
//           <div className="col-sm-12 bg-dark">
//             <h1 className='display-5 text-center mt-5 text-white fw-bold'>
//               My <span className='display-5 fw-bold text-primary'>Projects</span>
//             </h1>
//             <p className='text-center text-white'>Some of the work I’ve done recently</p>

//             {/* ROW 1 */}
//             <div className="row row-cols-1 mt-2 row-cols-md-3 g-4">
//               <div className="col">
//                 <div className="card h-100 p-3 border-2 border-primary rounded-4 text-white" style={{ backgroundColor: "black" }}>
//                   <img src={img1} className="card-img-top" alt="Text to Voice" />
//                   <div className="card-body">
//                     <h5 className="card-title">Text-to-Voice</h5>
//                     <div className='border-2 border-bottom'></div>

//                     <p style={{ fontSize: "14px" }}>
//                       A text-to-voice application built using HTML, CSS, Bootstrap, and JavaScript that converts text input into audible speech.
//                     </p>

//                     <p className='text-primary'>Javascript, HTML, CSS, Bootstrap</p>

//                     <Link to="/">
//                       <button className="bg-primary text-white border-0 mx-3 py-2 rounded-2">
//                         View Project
//                       </button>
//                     </Link>

//                     <Link to="/">
//                       <button className="bg-dark text-primary border border-primary rounded-2 py-2">
//                         Git-Hub
//                       </button>
//                     </Link>
//                   </div>
//                 </div>
//               </div>

//               <div className="col">
//                 <div className="card p-3 border-2 border-primary rounded-4 text-white" style={{ backgroundColor: "black", height: "102%" }}>
//                   <img src={img2} className="card-img-top" alt="Voice to Text" />
//                   <div className="card-body">
//                     <h5 className="card-title">Voice-To-Text</h5>
//                     <div className='border-3 border-bottom'></div>

//                     <p style={{ fontSize: "14px" }}>
//                       A voice-to-text application built using HTML, CSS, Bootstrap, and JavaScript that converts spoken words into text.
//                     </p>

//                     <p className='text-primary'>Bootstrap, HTML, CSS, Javascript</p>

//                     <Link to="/">
//                       <button className="bg-primary text-white border-0 mx-3 py-2 rounded-2">
//                         View Project
//                       </button>
//                     </Link>

//                     <Link to="/">
//                       <button className="bg-dark text-primary border border-primary rounded-2 py-2">
//                         Git-Hub
//                       </button>
//                     </Link>
//                   </div>
//                 </div>
//               </div>

//               <div className="col">
//                 <div className="card h-100 p-3 border-2 border-primary rounded-4 text-white" style={{ backgroundColor: "black" }}>
//                   <img src={img3} className="card-img-top" alt="Slider" />
//                   <div className="card-body">
//                     <h5 className="card-title">Slider</h5>
//                     <div className='border-3 border-bottom'></div>

//                     <p style={{ fontSize: "14px" }}>
//                       A responsive slider built using Bootstrap, HTML, CSS, and JavaScript.
//                     </p>

//                     <p className='text-primary'>Bootstrap, HTML, CSS, Javascript</p>

//                     <Link to="/">
//                       <button className="bg-primary text-white border-0 mx-3 py-2 rounded-2">
//                         View Project
//                       </button>
//                     </Link>

//                     <Link to="/">
//                       <button className="bg-dark text-primary border border-primary rounded-2 py-2">
//                         Git-Hub
//                       </button>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* ROW 2 */}
//             <div className="row row-cols-1 mt-2 row-cols-md-3 g-4">
//               <div className="col">
//                 <div className="card h-100 p-3 border-2 border-primary rounded-4 text-white" style={{ backgroundColor: "black" }}>
//                   <img src={img4} className="card-img-top" alt="Music Player" />
//                   <div className="card-body">
//                     <h5 className="card-title">Music Player</h5>
//                     <div className='border-3 border-bottom'></div>

//                     <p className='text-white' style={{ fontSize: "14px" }}>
//                       A music player application built using HTML, CSS, Bootstrap, and JavaScript with play, pause, and volume controls.
//                     </p>

//                     <p className='text-primary'>Javascript, HTML, CSS, Bootstrap</p>

//                     <Link to="/">
//                       <button className="bg-primary text-white border-0 mx-3 py-2 rounded-2">
//                         View Project
//                       </button>
//                     </Link>

//                     <Link to="/">
//                       <button className="bg-dark text-primary border border-primary rounded-2 py-2">
//                         Git-Hub
//                       </button>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* PAGINATION */}
//             <div className='text-center py-5'>
//               <Link to="/project">
//                 <button className='bg-primary rounded-2 text-white border-0' style={{ height: "40px", width: "70px" }}>
//                   Pre
//                 </button>
//               </Link>

//               <span className='text-white mx-2'>Page 1 of 2</span>

//               <Link to="/project2">
//                 <button className='bg-primary rounded-2 text-white border-0' style={{ height: "40px", width: "70px" }}>
//                   Next
//                 </button>
//               </Link>
//             </div>

//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Project2

import React from "react";
import img1 from "../assets/Images/textTovoice.jpeg";
import img2 from "../assets/Images/voicetotext1.jpeg";
import img3 from "../assets/Images/slider.jpeg";
import img4 from "../assets/Images/musicplayer.jpeg";
import { Link } from "react-router-dom";
import "../index.css";

const projects2 = [
  { img: img1, title: "Text-to-Voice", desc: "A text-to-voice application built using HTML, CSS, Bootstrap, and JavaScript that converts text input into audible speech.", tech: "Javascript, HTML, CSS, Bootstrap" },
  { img: img2, title: "Voice-To-Text", desc: "A voice-to-text application built using HTML, CSS, Bootstrap, and JavaScript that converts spoken words into text.", tech: "Bootstrap, HTML, CSS, Javascript" },
  { img: img3, title: "Slider",         desc: "A responsive slider built using Bootstrap, HTML, CSS, and JavaScript.", tech: "Bootstrap, HTML, CSS, Javascript" },
  { img: img4, title: "Music Player",   desc: "A music player application built using HTML, CSS, Bootstrap, and JavaScript with play, pause, and volume controls.", tech: "Javascript, HTML, CSS, Bootstrap" },
];

const Project2 = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row" style={{ backgroundColor: "#0a0a0f" }}>
          <div className="col-sm-12" style={{ backgroundColor: "#0a0a0f" }}>

            <h1 className="display-5 text-center mt-5 text-white fw-bold">
              My <span className="display-5 fw-bold text-primary">Projects</span>
            </h1>
            <p className="text-center text-white">Some of the work I've done recently</p>

            <div className="row row-cols-1 mt-2 row-cols-md-3 g-4 px-3">
              {projects2.map((p, i) => (
                <div className="col" key={i}>
                  <div className="pf-project-card h-100 rounded-4">

                    {/* Image with hover effect */}
                    <div className="pf-img-wrap" style={{ borderRadius: "12px 12px 0 0" }}>
                      <img src={p.img} alt={p.title} />
                      <div className="pf-img-overlay">
                        <Link to="/" className="pf-overlay-btn">🔗 View</Link>
                          <a
                          href="https://github.com/MohdAmir7269"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="pf-overlay-btn ghost"
                        >
                          GitHub
                        </a>
                         </div>
                    </div>

                    <div className="p-3">
                      <h5 className="text-white fw-bold">{p.title}</h5>
                      <div className="border-bottom border-primary mb-2"></div>
                      <p style={{ fontSize: "14px", color: "#8892a4" }}>{p.desc}</p>
                      <p className="text-primary" style={{ fontSize: "13px" }}>{p.tech}</p>
                      <Link to="/">
                        <button className="bg-primary text-white border-0 me-2 py-2 px-3 rounded-2 pf-btn-hover">View Project</button>
                      </Link>
                          <a
                          href="https://github.com/MohdAmir7269"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="pf-overlay-btn ghost"
                        >
                          GitHub
                        </a>
                    </div>

                  </div>
                </div>
              ))}
            </div>

            <div className="text-center py-5">
              <Link to="/project">
                <button className="bg-primary rounded-2 text-white border-0 pf-btn-hover" style={{ height: "40px", width: "70px" }}>Pre</button>
              </Link>
              <span className="text-white mx-3">Page 2 of 2</span>
              <Link to="/project2">
                <button className="bg-primary rounded-2 text-white border-0 pf-btn-hover" style={{ height: "40px", width: "70px" }}>Next</button>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Project2;