// import React from "react";
// import img1 from "../assets/Images/textTovoice.jpeg";
// import img2 from "../assets/Images/voicetotext1.jpeg";
// import img3 from "../assets/Images/slider.jpeg";
// import img4 from "../assets/Images/musicplayer.jpeg";
// import { Link } from "react-router-dom";
// import "../index.css";

// const projects2 = [
//   { 
//     img: img1, 
//     title: "Text-to-Voice", 
//     desc: "...", 
//     tech: "Javascript, HTML, CSS, Bootstrap",
//     link: "https://text-to-voice.vercel.app"
//   },
//   { 
//     img: img2, 
//     title: "Voice-To-Text", 
//     desc: "...", 
//     tech: "Bootstrap, HTML, CSS, Javascript",
//     link: "https://voice-totext.vercel.app/"
//   },
//   { 
//     img: img3, 
//     title: "Slider", 
//     desc: "...", 
//     tech: "...",
//     link: "https://slider-iota-rosy.vercel.app/"
//   },
//   { 
//     img: img4, 
//     title: "Music Player", 
//     desc: "...", 
//     tech: "...",
//     link: "https://musicplayer-ochre-two.vercel.app/"
//   },
// ];

// const Project2 = () => {
//   return (
//     <>
//       <div className="container-fluid">
//         <div className="row" style={{ backgroundColor: "#0a0a0f" }}>
//           <div className="col-sm-12" style={{ backgroundColor: "#0a0a0f" }}>

//             <h1 className="display-5 text-center mt-5 text-white fw-bold">
//               My <span className="display-5 fw-bold text-primary">Projects</span>
//             </h1>
//             <p className="text-center text-white">Some of the work I've done recently</p>

//             <div className="row row-cols-1 mt-2 row-cols-md-3 g-4 px-3">
//               {projects2.map((p, i) => (
//                 <div className="col" key={i}>
//                   <div className="pf-project-card h-100 rounded-4">

//                     <div className="pf-img-wrap" style={{ borderRadius: "12px 12px 0 0" }}>
//                       <img src={p.img} alt={p.title} />
//                       <div className="pf-img-overlay">
//                         {/* FIX 1 */}
//                         <a href={p.link} target="_blank" rel="noopener noreferrer" className="pf-overlay-btn">
//                           🔗 View
//                         </a>
//                         <a
//                           href="https://github.com/MohdAmir7269"
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="pf-overlay-btn ghost"
//                         >
//                           GitHub
//                         </a>
//                       </div>
//                     </div>

//                     <div className="p-3">
//                       <h5 className="text-white fw-bold">{p.title}</h5>
//                       <div className="border-bottom border-primary mb-2"></div>
//                       <p style={{ fontSize: "14px", color: "#8892a4" }}>{p.desc}</p>
//                       <p className="text-primary" style={{ fontSize: "13px" }}>{p.tech}</p>

//                       {/* FIX 2 */}
//                       <a href={p.link} target="_blank" rel="noopener noreferrer">
//                         <button className="bg-primary text-white border-0 me-2 py-2 px-3 rounded-2 pf-btn-hover">
//                           View Project
//                         </button>
//                       </a>

//                       <a
//                         href="https://github.com/MohdAmir7269"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="pf-overlay-btn ghost"
//                       >
//                         GitHub
//                       </a>
//                     </div>

//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="text-center py-5">
//               <Link to="/project">
//                 <button className="bg-primary rounded-2 text-white border-0 pf-btn-hover" style={{ height: "40px", width: "70px" }}>Pre</button>
//               </Link>
//               <span className="text-white mx-3">Page 2 of 2</span>
//               <Link to="/project2">
//                 <button className="bg-primary rounded-2 text-white border-0 pf-btn-hover" style={{ height: "40px", width: "70px" }}>Next</button>
//               </Link>
//             </div>

//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Project2;
import React from "react";
import img1 from "../assets/Images/textTovoice.jpeg";
import img2 from "../assets/Images/voicetotext1.jpeg";
import img3 from "../assets/Images/slider.jpeg";
import img4 from "../assets/Images/musicplayer.jpeg";
import { Link } from "react-router-dom";
import "../index.css";

const projects2 = [
  { 
    img: img1, 
    title: "Text-to-Voice Converter", 
    desc: "A neat and fast utility that synthesizes text strings input into real-time natural voice audio patterns.", 
    tech: "Javascript, HTML, CSS, Bootstrap",
    Role: "Frontend Developer",
    link: "https://text-to-voice.vercel.app"
  },
  { 
    img: img2, 
    title: "Voice-To-Text Converter", 
    desc: "Integrates standard web speech recognition to convert audio stream input efficiently into clean digital text format.", 
    tech: "Bootstrap, HTML, CSS, Javascript",
    Role: "Frontend Developer",
    link: "https://voice-totext.vercel.app/"
  },
  { 
    img: img3, 
    title: "Interactive Image Slider", 
    desc: "A responsive dynamic slide carousel system with automated playback control and smooth transitions.", 
    tech: "Javascript, HTML, CSS, Bootstrap",
    Role: "Frontend Developer",
    link: "https://slider-iota-rosy.vercel.app/"
  },
  { 
    img: img4, 
    title: "Web Music Player", 
    desc: "A lightweight full-featured custom browser music playback player application supporting playlist flows.", 
    tech: "Javascript, HTML, CSS, Bootstrap",
    Role: "Frontend Developer",
    link: "https://musicplayer-ochre-two.vercel.app/"
  },
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
                  <div className="pf-project-card h-100 rounded-4 d-flex flex-column justify-content-between" style={{ background: "#000", border: "2px solid #0d6efd" }}>

                    <div>
                      <div className="pf-img-wrap" style={{ borderRadius: "12px 12px 0 0", position: "relative", overflow: "hidden" }}>
                        <img src={p.img} alt={p.title} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
                        <div className="pf-img-overlay">
                          <a href={p.link} target="_blank" rel="noopener noreferrer" className="pf-overlay-btn">
                            🔗 View
                          </a>
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
                        
                        {/* FIXED: Rendered Role here as well */}
                        {p.Role && (
                          <p className="text-warning fw-semibold mb-1" style={{ fontSize: "13px" }}>
                            Role: {p.Role}
                          </p>
                        )}
                        
                        <p style={{ fontSize: "14px", color: "#8892a4" }}>{p.desc}</p>
                        <p className="text-primary" style={{ fontSize: "13px" }}><strong>Tech:</strong> {p.tech}</p>
                      </div>
                    </div>

                    <div className="p-3 pt-0">
                      <a href={p.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                        <button className="bg-primary text-white border-0 me-2 py-2 px-3 rounded-2 pf-btn-hover">
                          View Project
                        </button>
                      </a>

                      <a
                        href="https://github.com/MohdAmir7269"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none" }}
                      >
                        <button className="text-primary border border-primary rounded-2 py-2 px-3 pf-btn-ghost-hover bg-transparent">
                          GitHub
                        </button>
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