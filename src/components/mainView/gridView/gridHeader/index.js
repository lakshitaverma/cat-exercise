import React from "react";
import "./gridHeader.css";

// Components
import Animation from "../../../common/animation/index";
import GridTitle from "./gridTitle/index";

/*
  Animation
  GridTitle
  Animation
*/

const GridHeader = () => (
  <div className="grid-header">
    <Animation />
    <GridTitle />
    <Animation />
  </div>
);

export default GridHeader;
