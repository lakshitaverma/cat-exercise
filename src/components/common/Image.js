import React from "react";

const Image = props => (
  <img
    src={props.src}
    alt={props.alt}
    onClick={props.onClick}
    height={props.height}
    width={props.width}
    className={props.className}
  />
);

export default Image;
