import React from "react";

const Projects = () => {
  return (
    <div className="container-fluid " id="projects">
      <div className="row row-cols-1 row-cols-md-3 g-4 ">
        <div className="col ">
          <div className="card h-100">
            <img
              src="https://i.ibb.co/xDCMDPD/project01.png"
              className="card-img-top h-40"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Car empire</h5>
              <p className="card-text">
                In this project I have built an website of a car selling website
                To build this project I have used React and Bootstrap. In this
                website the end user can see the cars that are sold by the Naz
                car empire company The end user can click a specific car to know
                more details and can buy that car if the user is logged in
                otherwise the user will be redirected to the login page
              </p>
              <button type="button" class="btn btn-outline-primary">
                <a
                  className="text-decoration-none text-dark"
                  href="https://carwebdev.web.app/"
                >
                  Live Site
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src="https://i.ibb.co/qY34mN5/project02.png"
              className="card-img-top h-40"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Legend Tour & Travels</h5>
              <p className="card-text">
                In this project I have built an website of a tourism related
                website To build this project I have used React and Bootstrap In
                this website the end user can see the tour package offered by
                the tourism company The end user can click a specific tour to
                know more details and can book that tour if the user is logged
                in otherwise the user will be redirected to the login page.
              </p>
              <button type="button" class="btn btn-outline-primary">
                <a
                  className="text-decoration-none text-dark"
                  href="https://legend-tour-and-travels.web.app/"
                >
                  Live Site
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src="https://i.ibb.co/SyczTrF/project03.png"
              className="card-img-top h-40"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title"> Driving School</h5>
              <p className="card-text">
                In this project I have built an website of a Driving School
                website To build this project I have used React and Bootstrap.In
                this website the end user can see the Driver training package
                offered by some well known academy and enroll the packages.
              </p>
              <button type="button" class="btn btn-outline-primary">
                <a
                  className="text-decoration-none text-dark"
                  href="https://modest-rosalind-faa8a6.netlify.app/"
                >
                  Live Site
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
