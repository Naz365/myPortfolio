import React from "react";
import { Link } from "react-router-dom";

const Project2 = () => {
  return (
    <div>
      <div class="container pt-5">
        <div class="row justify-content-center align-items-center text-light">
          <div class="col-md-6">
            <div>
              <img
                className="img-fluid"
                src="https://i.ibb.co/pnh9TvT/photo-2021-11-30-21-54-45.jpg"
                alt=""
                srcset=""
              />
            </div>
          </div>
          <div class="col-md-6">
            <h1>Legend Tour & Travels</h1>
            <p>
              This is a full-stack single-page web app where users can book
              their tours. Users can also see the tours they booked for
              themselves and if they want they can also delete the tours as
              well. If the user is logged in the user can see all the tours
              booked by other users and edit the status as well, moreover, the
              user will also be able to delete the tours.
            </p>
            <ul>
              <p>
                <strong>Features:</strong>
              </p>
              <li>Developed this website with react and bootstrap.</li>
              <li>
                The end user can use this website to book tours. The end user
                can click to know more details and can see all the booked tours.
              </li>
              <li>
                If the user is logged in, he/she can see all the tours booked by
                himself/herself and also by other end users.
              </li>
              <li>Implemented authentication system using firebase</li>
              <li>Mobile and desktop responsive</li>
            </ul>
            <p>
              <strong>Technology:</strong>
            </p>
            <div>
              <h5 className="d-inline">
                <span className="me-2 mb-1 p-2 badge bg-success">HTML5</span>
              </h5>
              <h5 className="d-inline">
                <span className="me-2 mb-1 p-2 badge bg-success">CSS3</span>
              </h5>
              <h5 className="d-inline">
                <span className="me-2 mb-1 p-2 badge bg-success">
                  Bootstrap5
                </span>
              </h5>

              <h5 className="d-inline">
                <span className="me-2 mb-1 p-2 badge bg-success">
                  JavaScript
                </span>
              </h5>
              <h5 className="d-inline">
                <span className="me-2 mb-1 p-2 badge bg-success">React.js</span>
              </h5>
              <h5 className="d-inline">
                <span className="me-2 mb-1 p-2 badge bg-success">
                  React Router
                </span>
              </h5>

              <h5 className="d-inline">
                <span className="me-2 mb-1 p-2 badge bg-success">Node.js</span>
              </h5>
              <h5 className="d-inline">
                <span className="me-2 mb-1 p-2 badge bg-success">
                  Express.js
                </span>
              </h5>
              <h5 className="d-inline">
                <span className="me-2 mb-1 p-2 badge bg-success">MongoDB</span>
              </h5>
            </div>
            <button type="button" className="btn btn-outline-primary ">
              <a
                className="nav-link text-light"
                href="https://legend-tour-and-travels.web.app/"
              >
                Live site
              </a>
            </button>
            <button type="button" className="btn btn-outline-primary ">
              <a
                className="nav-link text-light"
                href="https://github.com/Naz365/tourism-client-site"
              >
                Source Code
              </a>
            </button>
          </div>
        </div>
        <div className="text-center m-2">
          <button type="button" class=" btn btn-outline-primary">
            <Link className="text-decoration-none text-light" to="/">
              Home
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project2;
