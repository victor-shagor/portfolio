import React from "react";
import { useHistory } from "react-router-dom";
import Cards from "./Cards";
import node from "../assets/img/node.jpg";
import react2 from "../assets/img/react1.PNG";
import react3 from "../assets/img/react3.PNG";
import { Cardiv } from "./styled-component";

const Node = () => {
  const history = useHistory();
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
            info={`Node backend for a bus booking app,where users can book, cancel bus trips and `}
            onClick={() => {
              const win = window.open(
                "https://github.com/victor-shagor/bus-connect",
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
              "Node backend for an hostel management app, where admin can see booking in real time"
            }
            onClick={() => {
              const win = window.open(
                "https://github.com/victor-shagor/hostel-booking",
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
