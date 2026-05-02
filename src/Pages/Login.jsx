
import React from "react";
import "../index.css";

const Login = () => {
  return (
    <div className="container-fluid">
      <div className="row" style={{ minHeight: "500px", backgroundColor: "#0b1117" }}>
        <div
          className="col-sm-7 py-5 mx-auto mt-4 mb-5 border border-primary rounded-3 p-4 pf-login-card-hover"
          style={{ backgroundColor: "black" }}
        >
          <h2 className="text-center text-white">Login</h2>

          <label className="text-white">Email Address</label><br />
          <input
            type="text"
            className="w-100 rounded-2 text-white bg-black border-2 border-primary pf-input-hover"
            placeholder="Enter Email"
            name="email"
            style={{ height: "15%", outline: "none" }}
          /><br /><br />

          <label className="text-white">Password</label><br />
          <input
            type="password"
            className="w-100 rounded-2 text-white bg-black border-2 border-primary pf-input-hover"
            placeholder="*********"
            name="password"
            style={{ height: "15%", outline: "none" }}
          /><br /><br />

          <button className="btn btn-primary w-100 pf-submit-hover" style={{ height: "15%" }}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;