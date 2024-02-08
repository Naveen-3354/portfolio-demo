import { useRef, useEffect, useState } from "react";
import "./Scroll.scss";

export const Scroll = () => {
  const data = [
    {

    }
  ]
  return (
    <div id="scroll">
      <div className="topic">
        <h1>My Learnings</h1>
      </div>

      <div className="one box"></div>
      <div className="two box"></div>
      <div className="three box"></div>
      <div className="four box"></div>
      <div className="five box"></div>
    </div>
  );
};
