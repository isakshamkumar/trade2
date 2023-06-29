/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const Sponsors = ({ property1, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`sponsors ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      <div className={`overlap-group-2 property-1-11-${state.property1}`}>
        <div className="bg-overlay" />
        <div className="frame">
          <img
            className="binance"
            alt="Binance"
            src={state.property1 === "variant-2" ? "/img/binance-1-2.png" : "/img/binance-1.png"}
          />
          <img
            className="wazirx"
            alt="Wazirx"
            src={state.property1 === "variant-2" ? "/img/wazirx-1-2.png" : "/img/wazirx-1.png"}
          />
          <div className="blockchain">Blockchain</div>
          <img
            className="kraken"
            alt="Kraken"
            src={state.property1 === "variant-2" ? "/img/kraken-1-1.png" : "/img/kraken-1-2.png"}
          />
          <img
            className="coinbase"
            alt="Coinbase"
            src={state.property1 === "variant-2" ? "/img/coinbase-1-1.png" : "/img/coinbase-1-2.png"}
          />
        </div>
      </div>
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        property1: "variant-2",
      };

    case "mouse_leave":
      return {
        ...state,
        property1: "default",
      };
  }

  return state;
}

Sponsors.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
};
