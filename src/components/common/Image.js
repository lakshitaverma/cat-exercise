import React from "react";

const Image = props => (
  <img
    key={props.key}
    src={props.src}
    alt={props.alt}
    onClick={props.onClick}
    height={props.height}
    width={props.width}
  />
);

export default Image;
