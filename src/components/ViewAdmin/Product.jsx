import React from "react";
//import { Link } from "react-router-dom";

export const Product = (props) => {
  // TODO probar destructurando props
  //console.log(props)
  return (
    <>
      <div className="card text-center">
        <div className="card-body">
          <button>delete</button>
          <img src={props.image} alt="" width="150" />
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">$10.00 _ 20 Hamburguesa</p>
          <button
            className="btn btn-outline-primary rounded-0"
          >
            Edit dish
          </button>
        </div>
      </div>
    </>
  );
};
