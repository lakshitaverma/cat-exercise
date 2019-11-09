import React from "react";
import "./gridContainer.css";

import GridView from "../gridView/index";

/*
  GridView
*/

const GridContainer = props => (
  <div className="grid-container">
    <div className="text-center">
      <h1>CATS GRID</h1>
    </div>
    <GridView gridCats={props.gridCats} />
  </div>
);

export default GridContainer;
