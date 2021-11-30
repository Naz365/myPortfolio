import React from "react";
import { Link } from "react-router-dom";

const Project1 = () => {
  return (
    <>
      <div class="container pt-5">
        <div class="row justify-content-center align-items-center text-light">
          <div class="col-md-6">
            <div>
              <img
                className="img-fluid"
                src="https://i.ibb.co/mT9tG6K/photo-2021-11-30-21-54-42.jpg"
                alt=""
                srcset=""
              />
            </div>
          </div>
          <div class="col-md-6">
            <h1>Car empire</h1>
            <p>
              This is a full-stack single-page web app where users can purchase
              cars, There is also a dashboard where users can see the cars they
              purchased and can also delete them. If the role of the user is
              admin he/she can manage all the user's activities, so there is a
              separate dashboard for the users and admins
            </p>
            <ul>
              <p>
                <strong>Features:</strong>
              </p>
              <li>Developed this website with react and bootstrap.</li>
              <li>
                The end user can use this website to purchase cars. Besides, the
                end user can see all the cars he/she purchased and also the end
                user can also delete purchased cars.
              </li>
              <li>
                The admin will be able to see all the cars,moreover,the admin
                can delete cars or add cars. Besides, the admin can also see the
                cars purchased by the end users. The admin can approve the cars
                to be shipped from the pending,moreover,the admin can also
                cancel/delete cars purchased by the end user.
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
                href="https://carwebdev.web.app/"
              >
                Live site
              </a>
            </button>
            <button type="button" className="btn btn-outline-primary ">
              <a
                className="nav-link text-light"
                href="https://github.com/Naz365/Naz-car-empire-client-site"
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
    </>
  );
};

export default Project1;
