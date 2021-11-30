import React from "react";
import "./Herosection.css";
const Herosection = () => {
  return (
    <div className="container-flued herosection ">
      <div className="text-white herosection_text ">
        <h1>Hi 👋 ٱلسَّلَامُ عَلَيْكُمْ</h1>
        <h2>I'm Mohammad Nazmul Hossain</h2>
        <h3>I'm a front-end Web Developer</h3>
        <button type="button" className="btn btn-outline-primary btn-lg">
          <a
            className="nav-link text-light"
            href="https://drive.google.com/file/d/11OWO2QfKm7OCmU48ru3DYDxWuOxqHGIC/view?usp=sharing"
          >
            Resume
          </a>
        </button>
      </div>
    </div>
  );
};

export default Herosection;
