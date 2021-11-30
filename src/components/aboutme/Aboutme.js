import React from "react";
import "./Aboutme.css";
const Aboutme = () => {
  return (
    <div className="container-fluid bg-dark text-light about " id="about">
      <div class="row justify-content-center align-items-center">
        <h1 className="text-center p-3 m-2">About me</h1>
        <div class="col-md-6 text-center">
          <img
            className=" img-fluid  rounded-3 p-3 mb-5"
            src="https://i.ibb.co/SffTqkZ/Naz365-1.jpg"
            alt=""
            srcset=""
          />
        </div>
        <div class="col-md-6">
          <p className="text-wrap">
            {/* style={{ width: "6rem" }} */}
            <strong>Mohammad Nazmul Hossain </strong>
            Loves programming, invariably delighted to learn something new,
            create new ideas and also love to implement ideas as well. A
            front-end Web Developer. Dedicated to inventing amazing and speedy
            Websites for his consumers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
