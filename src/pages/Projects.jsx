import React, { useState } from "react";
import { Link } from "react-router-dom";
import Node from "../components/Node";
import ReactProject from "../components/React";

const Projects = () => {
  const [toggle, setToggle] = useState("node");
  return (
    <div className="w-100 message">
      <div className="row">
        <p className="font-weight-bold h3 border-bottom border-dark pb-3 mb-4 mx-auto text-primary">
          Projects
        </p>
      </div>
      <div className="w-100">
        <div className="row">
          <div
            className="d-flex mx-auto"
            style={{
              backgroundColor: "#E1E1E1",
              width: "285px",
              borderRadius: "20px",
            }}
          >
            <Link
              to="#"
              onClick={() => setToggle("node")}
              type="button"
              style={
                toggle === "node"
                  ? {
                      textDecoration: "none",
                      backgroundColor: "white",
                      color: "#4b21ff",
                      borderRadius: "15px",
                      border: "none",
                    }
                  : {
                      backgroundColor: "#e1e1e1",
                      color: "#000",
                      borderRadius: "15px",
                      textDecoration: "none",
                    }
              }
              className="pt-2 pb-2 pl-5 pr-5 m-1 border-0"
            >
              Node
            </Link>
            <Link
              onClick={() => setToggle("react")}
              to="#"
              style={
                toggle === "react"
                  ? {
                      textDecoration: "none",
                      backgroundColor: "white",
                      color: "#4b21ff",
                      borderRadius: "15px",
                      border: "none",
                    }
                  : {
                      backgroundColor: "#e1e1e1",
                      color: "#000",
                      textDecoration: "none",
                      borderRadius: "15px",
                    }
              }
              className="pt-2 pb-2 pl-5 pr-5 m-1 border-0"
            >
              React
            </Link>
          </div>
        </div>

        <div className="">
          {toggle === "node" ? <Node /> : <ReactProject />}
          <div className="row">
            <Link
              className="btn btn-primary mx-auto mb-2 rounded"
              onClick={() => {
                const win = window.open(
                  "https://github.com/victor-shagor",
                  "_blank"
                );
                if (win != null) {
                  win.focus();
                }
              }}
            >
              View more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
