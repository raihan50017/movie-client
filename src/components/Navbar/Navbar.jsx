import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUser,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="#">
          <img alt="Logo" height={50} src="movie-logo.png"></img>
        </a>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <form className="d-flex ms-auto">
            <input
              className="form-control rounded-0 me-0"
              type="search"
              placeholder="Search"
              aria-label="Search"
            ></input>
            <button className="btn btn-success rounded-0" type="submit">
              <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
            </button>
          </form>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Get Pro
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Movies
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Watch-List
              </a>
            </li>
            <li className="nav-item">
              <div class="dropdown">
                <button
                  class="nav-link active btn btn-sm btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  EN
                </button>
                <ul
                  class="dropdown-menu dropdown-menu-left"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <a class="dropdown-item" href="#">
                      BN
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      UK
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                <FontAwesomeIcon
                  className="fs-5"
                  icon={faUser}
                ></FontAwesomeIcon>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
