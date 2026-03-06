import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      className="container-fluid "
    >
      
      <div className="row align-items-center   border-bottom border-primary" style={{
        position: "fixed",backgroundColor:"black",objectFit:"cover",zIndex:"999",top:"0",left:"0",right:"0"
      }}> 
        <div className="col-sm-5 p-3">
          <h3 className="text-light">
            Mohammad <span className="text-primary">Amir</span>
          </h3>
        </div>
        <div className="col-sm-7">
          <div className="d-flex justify-content-end align-items-center flex-wrap">
            <NavLink to="/" className="btn btn-outline-light mx-1 border-0">
              Home
            </NavLink>
            <NavLink to="/about" className="btn btn-outline-light mx-1  border-0">
              About
            </NavLink>
            <NavLink to="/project" className="btn btn-outline-light mx-1 border-0">
              Project
            </NavLink>
            <NavLink to="/skill" className="btn btn-outline-light mx-1 border-0">
              Skill
            </NavLink>
            <NavLink to="/services" className="btn btn-outline-light mx-1 border-0">
              Services
            </NavLink>
             <NavLink to="/Contact" className="btn btn-outline-light mx-1 border-0">
            Contact Us
            </NavLink>
            <NavLink to="/login" className="btn btn-primary mx-1 border-0">
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
