import React from "react";

const Line = ({ color, delay, direction, duration, index }) => {
  let styles = {
    height: "300px",
    width: "3px",
    backgroundColor: color,
    animationDelay: `${delay}s`,
    animationDirection: direction,
    animationDuration: `${duration}s`,
    zIndex: index,
  };

  return <div className="line" style={styles}></div>;
};

export default Line;
