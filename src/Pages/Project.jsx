import React from "react";
import img1 from "../assets/Images/roboelectric.jpeg";
import img2 from "../assets/Images/Bank-ledger.jpeg";
import img3 from "../assets/Images/grs.jpeg";
import img4 from "../assets/Images/SonoRestourant.jpeg";
import img5 from "../assets/Images/portfolio.jpeg";
import img6 from "../assets/Images/weatherApp.jpeg";
import img7 from "../assets/Images/TodoApp.jpeg";
import img8 from "../assets/Images/QuizApp.jpeg";
import { Link } from "react-router-dom";

const projects = [
  {
    img: img1,
    title: "Softpro Innovation – E-commerce Platform (Electric Products)",
    desc: "Developed a full-featured e-commerce web application for selling electrical products such as fans, lights, cables, and home appliances. The platform provides a seamless shopping experience with user authentication and admin management.",
    tech: "MongoDB, Express.js, React.js, Node.js, Bootstrap, HTML, CSS, Javascript",
    Role: "Backend & Full Stack Developer",
    link: "#",
  },
  {
    img: img2,
    title: "Bank-Ledger – Transaction & Payment System",
    desc: "Built a banking transaction system to manage user accounts, deposits, withdrawals, and transaction history with ledger tracking.",
    tech: "MongoDB, Express.js, React.js, Node.js, Mongoose, HTML, CSS, Javascript",
    Role: "Backend & Full Stack Developer",

    frontend: "https://banktransaction-sjyr.vercel.app/",
    backend: "https://banktransaction-2.onrender.com/",
  },
  {
    img: img3,
    title: "GRS Complaint System – College Complaint Portal",
    desc: "Designed and developed an online grievance redressal system for college students to submit and track complaints digitally.",
    tech: "MongoDB, Express.js, React.js, Node.js, Mongoose,HTML, CSS, Javascript",
    Role: "Backend & Full Stack Developer",
    frontend: "https://grivance-6x7y.vercel.app/",
  },
  {
    img: img4,
    title: "Sono Restaurant",
    desc: "This restaurant website is built using React.js with a clean and responsive design.",
    tech: "React, Bootstrap, HTML, CSS, Javascript",
    link: "https://sono-hotel.vercel.app/",
  },
  {
    img: img5,
    title: "Portfolio",
    desc: "This My Personal Portfolio website is built using React.js with a clean and responsive design.",
    tech: "React, Bootstrap, HTML, CSS, Javascript",
    link: "https://my-personal-portfolio-eight-phi.vercel.app/",
  },

  {
    img: img6,
    title: "Weather App",
    desc: "A weather application built using HTML, CSS, Bootstrap, and JavaScript.",
    tech: "Javascript, HTML, CSS, Bootstrap",
    link: "https://weatherapp-nine-roan.vercel.app/",
  },
  {
    img: img7,
    title: "TO-DO App",
    desc: "A simple To-Do application to manage daily tasks efficiently.",
    tech: "Javascript, HTML, CSS, Bootstrap",
    link: "https://todo-app-d5md.vercel.app/",
  },
  {
    img: img8,
    title: "Quiz App",
    desc: "A quiz application with an interactive user interface.",
    tech: "Javascript, HTML, CSS, Bootstrap",
    link: "https://quiz-app-to5h.vercel.app",
  },
];

const Project = () => {
  return (
    <>
      <style>{`
      .pf-project-card{
        background:#000;
        border:2px solid #0d6efd;
        transition:0.4s;
        overflow:hidden;
        box-shadow:0 10px 30px rgba(0,0,0,0.6);
      }

      .pf-project-card:hover{
        transform:translateY(-10px);
        box-shadow:0 20px 40px rgba(13,110,253,0.4);
      }

      .pf-img-wrap{
        position:relative;
        overflow:hidden;
      }

      .pf-img-wrap img{
        width:100%;
        height:200px;
        object-fit:cover;
        transition:0.4s;
      }

      .pf-project-card:hover img{
        transform:scale(1.1);
      }

      .pf-img-overlay{
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
        background:rgba(0,0,0,0.7);
        display:flex;
        justify-content:center;
        align-items:center;
        gap:10px;
        opacity:0;
        transition:0.4s;
      }

      .pf-project-card:hover .pf-img-overlay{
        opacity:1;
      }

      .pf-overlay-btn{
        background:#0d6efd;
        color:#fff;
        padding:8px 15px;
        border-radius:6px;
        text-decoration:none;
        font-size:14px;
      }

      .pf-overlay-btn.ghost{
        background:transparent;
        border:1px solid #0d6efd;
      }

      .pf-btn-hover{
        transition:0.3s;
      }

      .pf-btn-hover:hover{
        transform:scale(1.05);
      }

      .pf-btn-ghost-hover:hover{
        background:#0d6efd;
        color:#fff !important;
      }
      `}</style>

      <div className="container-fluid">
        <div className="row" style={{ backgroundColor: "#0a0a0f" }}>
          <div className="col-sm-12">
            <h1 className="display-5 text-center mt-5 text-white fw-bold">
              My <span className="text-primary">Projects</span>
            </h1>

            <p className="text-center text-white">
              Some of the work I've done recently
            </p>

            <div className="row row-cols-1 row-cols-md-3 g-4 px-3 mt-3">
              {projects.map((p, i) => (
                <div className="col" key={i}>
                  <div className="pf-project-card rounded-4 h-100">
                    <div className="pf-img-wrap">

                      
                      <img src={p.img} alt={p.title} />
                           
                    </div>
                    
                    <a
                      href={p.frontend || p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none" }}
                    >
                      <button className="bg-primary text-white border-0 me-3 py-2 px-3 ms-3 rounded-2 pf-btn-hover">
                        View Project
                      </button>
                    </a>

                    <a
                      href={p.github || "https://github.com/MohdAmir7269"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="text-primary border border-primary rounded-2 py-2 px-3 pf-btn-ghost-hover bg-transparent">
                        GitHub
                      </button>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center py-5">
              <Link to="/project">
                <button className="bg-primary text-white border-0 px-4 py-2 rounded">
                  Pre
                </button>
              </Link>
              <span className="text-white mx-3">Page 1 of 2</span>
              <Link to="/project2">
                <button className="bg-primary text-white border-0 px-4 py-2 rounded">
                  Next
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
