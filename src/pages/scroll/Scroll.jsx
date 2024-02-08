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

      <div className="one box"><p>one</p></div>
      <div className="two box"><p>two</p></div>
      <div className="three box"><p>three</p></div>
      <div className="four box"><p>four</p></div>
      <div className="five box"><p>five</p></div>
      <div className="big big-1">big</div>
      <div className="big big-2">big</div>
    </div>
  );
};
