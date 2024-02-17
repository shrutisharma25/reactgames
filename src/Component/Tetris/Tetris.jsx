import React from "react";
import "./Tetris.css";

import Stage from "../Tetris/Stage";
import Display from "../Tetris/Display";
import StartButton from "../Tetris/StartButton";

const Tetris = ({}) => {
  return (
    <div className="tetris-main">
      <Stage />
      <aside>
        <div>
          <Display text="Score" />
          <Display text="Rows" />
          <Display text="Level" />
        </div>
      </aside>
    </div>
  );
};

export default Tetris;
