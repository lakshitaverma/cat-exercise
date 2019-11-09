import React from "react";
import "./catsView.css";

// Component
import Image from "../../common/Image";

const cats = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

/*
  Image
*/

const CatsView = props => (
  <div className="cats-view">
    {cats.map(cat => {
      return (
        <Image
          key={cat}
          src={require("../../../cats_images/cat_" + cat + ".png")}
          alt={"cat_" + cat}
          onClick={props.addCatToGrid.bind(this, cat)}
          height="230px"
        />
      );
    })}
  </div>
);

export default CatsView;
