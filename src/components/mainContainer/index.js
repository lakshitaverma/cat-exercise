import React from "react";
import "./mainContainer.css";

import CatsView from "../catsView/index";
import GridContainer from "../gridContainer/index";

/*
  CatsView
  GridContainer
*/

const MainContainer = props => (
  <div className="main-container">
    <CatsView addCatToGrid={props.addCatToGrid} />
    <GridContainer gridCats={props.gridCats} />
  </div>
);

export default MainContainer;
