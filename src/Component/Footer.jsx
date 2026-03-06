import React from 'react'

import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12 py-4  " style={{backgroundColor:"#1c1c1c", }}>
        <div className="row">
          <div className="col-sm-6 mx-auto">
          <div className="d-flex justify-content-end align-items-center flex-wrap">
            <NavLink to="/" className=" me-4 border-0 " style={{textDecoration:"none"}}>
              Home
            </NavLink>
            <NavLink to="/about" className=" me-4 border-0" style={{textDecoration:"none"}}>
              About
            </NavLink>
            <NavLink to="/project" className=" me-4 border-0" style={{textDecoration:"none"}}>
              Project
            </NavLink>
            <NavLink to="/skill" className=" me-4 border-0" style={{textDecoration:"none"}}>
              Skill
            </NavLink>
            <NavLink to="/services" className=" me-4 border-0" style={{textDecoration:"none"}}>
              Services
            </NavLink>
            <NavLink to="/login" className=" me-4 border-0" style={{textDecoration:"none"}}>
            Contact Us
            </NavLink>
          </div>
          <p className='text-white text-center mt-4 ' style={{fontSize:"14px", color:"#BDC3C7"}}>© 2026 Mohammad Amir. All rights reserved.</p>
        </div>
        </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer