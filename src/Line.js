import React from "react";
import * as d3 from "d3";

const lineStyle = {
  stroke: "steelblue",
  strokeWidth: "6px",
  fill: "rgba(0, 0, 0, 0)"
};

const RoundedCorner = ({ start, end, radius = 5 }) => {
  const line = d3
    .line()
    .x((d) => d[0])
    .y((d) => d[1])
    .curve(d3.curveBundle.beta(1));

  const points = [
    start,
    [start[0], end[1] - radius],
    [start[0] + radius, end[1]],
    end
  ];

  return <path d={line(points)} style={lineStyle} />;
};

export const Link = ({ start, end }) => {
  const link = d3.linkHorizontal();

  return <path d={link({ source: start, target: end })} style={lineStyle} />;
};

export default RoundedCorner;
