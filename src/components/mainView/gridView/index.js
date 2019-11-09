import React from "react";
import "./gridView.css";

// Components
import GridHeader from "./gridHeader/index";
import Grid from "./grid/index";

/*
  GridHeader
  Grid
*/

const GridView = props => (
  <div className="grid-view">
    <GridHeader />
    <Grid gridCats={props.gridCats} />
  </div>
);

export default GridView;
