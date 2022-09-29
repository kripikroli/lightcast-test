import React from "react";

const style = {
  display: "inline-block",
  width: "100%",
  textAlign: "right",
  color: "#808080",
  fontSize: "15px",
  flexDirection: "row",
};

const rotateStyles = {
  transform: "rotate(-90deg)",
  width: 120,
  transformOrigin: "center",
};

const Label = ({ text, rotate }) => (
  <div className="mt-5">
    <span style={{ ...style, ...(rotate ? rotateStyles : {}) }}>{text}</span>
  </div>
);

export default Label;
