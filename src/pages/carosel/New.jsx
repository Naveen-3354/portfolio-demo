import "./New.scss";
import { useEffect, useState } from "react";

export const New = () => {
  const [tab1, setTab1] = useState({});
  return (
    <div className="new">
      <div className="text">
        <p id="movingText">Text that moves</p>
      </div>
    </div>
  );
};
