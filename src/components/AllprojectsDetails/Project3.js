import React from "react";
import { Link } from "react-router-dom";

const Project3 = () => {
  return (
    <div>
      <div class="container pt-5">
        <div class="row justify-content-center align-items-center text-light">
          <div class="col-md-6">
            <div>
              <img
                className="img-fluid"
                src="https://i.ibb.co/fprXfVW/photo-2021-11-30-21-56-32.jpg"
                alt=""
                srcset=""
              />
            </div>
          </div>
          <div class="col-md-6">
            <h1>Driving School</h1>
            <p>
              This is a single-page web app where users can see all the services
              offered by Driving School. If the user is logged in, the user will
              be able to see more details of that service
            </p>
            <ul>
              <p>
                <strong>Features:</strong>
              </p>
              <li>Developed this website with react and bootstrap.</li>
              <li>
                The end user can see all the services offered and can click to
                know more details
              </li>
              <li>
                The user can be authenticated by email and and password or via
                google
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
                href="https://modest-rosalind-faa8a6.netlify.app/"
              >
                Live site
              </a>
            </button>
            <button type="button" className="btn btn-outline-primary ">
              <a
                className="nav-link text-light"
                href="https://github.com/Naz365/driving-school"
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

export default Project3;
