import React from "react";
import "./gridItem.css";

// Component
import Image from "../../../../common/Image";

/*
  Image
*/

const GridItem = props => (
  <div key={props.gridItem} className="grid-item">
    {props.gridCats["grid" + props.gridItem] && (
      <Image
        src={require("../../../../../cats_images/cat_" +
          props.gridCats["grid" + props.gridItem] +
          ".png")}
        height="150px"
        alt={"grid_" + props.gridItem}
      />
    )}
  </div>
);

export default GridItem;
