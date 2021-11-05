import React from "react";
import ReactDOM from "react-dom";

import RoundedCorner, { Link } from "./Line";
import { roundPathCorners } from "./rounding";

import "./styles.css";

const squarePath = "M100 100 L 300 150 L 400 300 L 100 300 L 100 100";
const roundedPath = roundPathCorners(squarePath, 15, false);

function App() {
  return (
    <div className="App">
      <p style={{ fontSize: "small" }}>{roundedPath}</p>
      <svg width="100%" height="500px" style={{ border: "1px solid red" }}>
        <path
          d="M30,10 h200 a20,20 0 0 1 20,20 v200 a20,20 0 0 1 -20,20 h-200 a20,20 0 0 1 -20,-20 v-200 a20,20 0 0 1 20,-20 z"
          fill="none"
          stroke="black"
        />
        <path d={roundedPath} fill="none" stroke="red" />
        <text x="20" y="20" fill="blue">
          {roundedPath}
        </text>
      </svg>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
