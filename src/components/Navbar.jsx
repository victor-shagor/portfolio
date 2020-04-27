import React from "react";
import { Link, useHistory } from "react-router-dom";

const Navbar = () => {
  const history = useHistory();
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand text-primary" to="/">
        ABIOLA
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li
            className={
              history.location.pathname === "/projects"
                ? "nav-item"
                : "nav-item active"
            }
          >
            <Link className="nav-link" to="/">
              Home <span class="sr-only">(current)</span>
            </Link>
          </li>
          <li
            className={
              history.location.pathname === "/projects"
                ? "nav-item active"
                : "nav-item"
            }
          >
            <Link className="nav-link" to="/projects">
              Projects
            </Link>
          </li>
          <li>
            <a
              className="nav-link"
              href="https://drive.google.com/open?id=1d8n0T_hyfTM7FbR_3Tb6NeckX0pyPhao"
            >
              CV
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
