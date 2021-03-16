import React from "react";
import Cards from "./Cards";
import node from "../assets/img/node.jpg";
import { Cardiv } from "./styled-component";

const Node = () => {
  return (
    <div className="row mt-4 mb-4">
      <div className="row mx-auto d-flex justify-content-around">
        <Cardiv className="mr-3">
          <Cards
            image={node}
            info={
              "Node backend for a travel booking app,where users can book flights and hotel accomodations"
            }
            onClick={() => {
              const win = window.open(
                "https://github.com/andela/rogue-backend",
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
            image={node}
            info={"Worked on the server side of this Resume building application"}
            onClick={() => {
              const win = window.open(
                "https://www.resume.com",
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
            image={node}
            info={
              "Worked on the backend of this loan application web app"
            }
            onClick={() => {
              const win = window.open(
                "https://beta.scorethebusiness.com",
                "_blank"
              );
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

export default Node;
