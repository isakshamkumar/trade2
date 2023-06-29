/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const Button = ({ property1, className, getStartedClassName }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`button ${className}`}
      onClick={() => {
        dispatch("click");
      }}
    >
      <div className={`get-started ${state.property1} ${getStartedClassName}`}>Get Started</div>
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "click":
      return {
        ...state,
        property1: "variant-2",
      };
  }

  return state;
}

Button.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "variant-3", "default"]),
};
