import React from "react";
import "./animation.css";

const balls = [1, 2, 3, 4, 5, 6, 7];

const Animation = () => (
  <div className="animation">
    {balls.map(ball => (
      <div key={ball} className="ball" />
    ))}
  </div>
);

export default Animation;
