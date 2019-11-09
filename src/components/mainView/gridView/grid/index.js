import React from "react";
import "./grid.css";

// Component
import GridItem from "./gridItem/index";

const grid = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

/*
  GridItem
*/

const Grid = props => (
  <div className="grid">
    {grid.map(gridItem => {
      return (
        <GridItem
          key={gridItem}
          gridCats={props.gridCats}
          gridItem={gridItem}
        />
      );
    })}
  </div>
);

export default Grid;
