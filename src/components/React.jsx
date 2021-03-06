import React from "react";
import Cards from "./Cards";
import react1 from "../assets/img/react.PNG";
import react2 from "../assets/img/react1.PNG";
import react3 from "../assets/img/react3.PNG";
import { Cardiv } from "./styled-component";

const ReactProject = () => {
  return (
    <div className="row mt-4 mb-4">
      <div className="row mx-auto d-flex justify-content-around">
        <Cardiv className="mr-3">
          <Cards
            image={react1}
            onClick={() => {
              const win = window.open(
                "https://startupzone.compexafrica.com/",
                "_blank"
              );
              if (win != null) {
                win.focus();
              }
            }}
          />
        </Cardiv>
        <Cardiv className="mr-3">
          <Cards
            image={react2}
            onClick={() => {
              const win = window.open("https://www.compexafrica.com", "_blank");
              if (win != null) {
                win.focus();
              }
            }}
          />
        </Cardiv>
        <Cardiv className="mr-3">
          <Cards
            image={react3}
            onClick={() => {
              const win = window.open("https://www.resume.com", "_blank");
              if (win != null) {
                win.focus();
              }
            }}
          />
        </Cardiv>
      </div>
    </div>
  );
};

export default ReactProject;
