import React from "react";
import { Link } from "react-router-dom";

const Cards = (props) => {
  return (
    <div
      className="card col-sm-4 shadow mb-3"
      style={{
        maxWidth: "20rem",
        minHeight: '20rem',
        maxHeight: '20rem'
      }}
      onClick={props.onClick}
    >
      <img className="card-img-top" src={props.image} alt="" />
      <div className="card-body">
        <p style={{ fontSize: "13px" }}>{props.info}</p>
        <Link to={props.link}>
          <p className="card-text">check it out</p>
        </Link>
      </div>
    </div>
  );
};

export default Cards;
