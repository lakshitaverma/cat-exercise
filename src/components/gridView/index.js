import React from "react";
import "./gridView.css";

import Image from "../common/Image";

const grid = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

/*
  Image
*/

const GridView = props => (
  <div className="grid-view">
    {grid.map(gridItem => {
      return (
        <div key={gridItem} className="grid-item">
          {props.gridCats["grid" + gridItem] && (
            <Image
              src={require("../../cats_images/cat_" +
                props.gridCats["grid" + gridItem] +
                ".png")}
              height="150px"
            />
          )}
        </div>
      );
    })}
  </div>
);

export default GridView;
