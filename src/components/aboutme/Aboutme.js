import React from "react";
import "./Aboutme.css";
const Aboutme = () => {
  return (
    <div className="container text-light" id="about">
      <div class="row">
        <div class="col-md-4">
          <img
            className="img-fluid"
            src="https://i.ibb.co/zh8wz29/Webp-net-resizeimage.jpg"
            alt=""
            srcset=""
          />
        </div>
        <div class="col-md-8">
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
