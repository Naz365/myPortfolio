import React from "react";
import { Link } from "react-router-dom";
import Herosection from "../Herosection/Herosection";

const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark shadow-5-strong">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <Link class="navbar-brand" href="#">
            Navbar
          </Link>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" href="#">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" href="#">
                  About me
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link " href="#">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Herosection></Herosection>
    </div>
  );
};

export default Header;
