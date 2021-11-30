import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "./Herosection.css";
const Herosection = () => {
  return (
    <div className=" herosection ">
      <div className="text-white herosection_text ">
        <h1 className="tw1">Hi 👋 ٱلسَّلَامُ عَلَيْكُمْ</h1>
        <h2 className="tw2">I'm Mohammad Nazmul Hossain</h2>
        <h3 className="tw3">
          I'm a{" "}
          <span
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: "1.6rem",
            }}
          >
            <Typewriter
              words={[
                "Front-end developer",
                "JavaScript developer",
                "React developer",
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h3>
        <button type="button" className="btn btn-outline-primary btn-lg">
          <a
            className="nav-link text-light"
            href="https://drive.google.com/u/0/uc?id=11OWO2QfKm7OCmU48ru3DYDxWuOxqHGIC&export=download"
          >
            Resume
          </a>
        </button>
      </div>
    </div>
  );
};

export default Herosection;
