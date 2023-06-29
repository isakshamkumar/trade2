/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Card = ({ property1, className }) => {
  return (
    <div className={`card ${className}`}>
      <div className={`overlap-group property-1-${property1}`}>
        <div className="ellipse" />
        <div className="div" />
        <div className="ellipse-2" />
        <div className="ellipse-3" />
        <div className="rectangle" />
        <div className="visa">Visa</div>
        <div className="ellipse-4" />
        <div className="ellipse-5" />
        <div className="rectangle-2" />
        <div className="rectangle-3" />
        <p className="element">
          4325&nbsp;&nbsp; 5685&nbsp;&nbsp; 2145&nbsp;&nbsp; 6598
          <br />
          <br />
          John Doe
        </p>
      </div>
    </div>
  );
};

Card.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
};
