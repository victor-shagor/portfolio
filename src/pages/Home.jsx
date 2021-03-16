import React, { useState, useEffect } from "react";
import picture from "../assets/img/picture.jpeg";
import { Slide } from "@material-ui/core";
import { Link } from "react-router-dom";

const Home = () => {
  const [firstPostRender, setfirstPostRender] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setfirstPostRender(true);
    }, 500);
  }, []);
  return (
    <div className="row w-100" style={{ height: "100vh", width: "100vw" }}>
      <Slide
        direction="right"
        timeout={900}
        in={firstPostRender}
        mountOnEnter
        unmountOnExit
      >
        <div className="my-auto row col-lg-4 ml-4 mr-1">
          <div className="my-auto mx-auto">
            <p style={{ fontWeight: "bold", fontSize: "25px" }}>
              ABIOLA V. OJO
            </p>
            <h6 className="font-weight-bold">About Me</h6>
            <p style={{ width: "90%", fontSize: "13px" }}>
              I am a fullstack software developer with the passion for learning
              new technologies,tools and building scalable and robust
              applications. When not immersed in front of screens, I play and
              watch soccer
            </p>
            <Link to="/projects">
              <input
                className="btn btn-primary"
                type="submit"
                value="Projects"
                style={{ borderRadius: "8px", backgroundColor: "#4b21ff" }}
              />
            </Link>
          </div>
        </div>
      </Slide>
      <Slide
        direction="up"
        timeout={900}
        in={firstPostRender}
        mountOnEnter
        unmountOnExit
      >
        <div
          className="shadow-lg my-auto row col-lg-4 mr-3 d-none d-lg-flex d-xl-flex"
          style={{ height: "90vh" }}
        >
          <img
            className="my-auto mx-auto"
            src={picture}
            alt=""
            style={{ height: "350px", width: "300px" }}
          />
        </div>
      </Slide>
      <Slide
        direction="left"
        timeout={900}
        in={firstPostRender}
        mountOnEnter
        unmountOnExit
      >
        <div
          className="row col-lg-4"
          style={{ backgroundColor: "#4b21ff", color: "white", width: "100%" }}
        >
          <div className="my-auto mx-auto">
            <h2>Contact</h2>
            <p>
              Email <br />
              ojoabiolavictor@gmail.com
            </p>
            <p>
              Phone <br />
              +234 813 937 1140
            </p>
            <div>
              Find me on <br />
              <span className="d-flex">
                <a
                  style={{ color: "white" }}
                  href="https://github.com/victor-shagor"
                >
                  <i className="fab fa-github mr-2"></i>
                </a>
                <a
                  style={{ color: "white" }}
                  href="https://www.linkedin.com/in/abiola-ojo-b9b19b13a/"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Home;
