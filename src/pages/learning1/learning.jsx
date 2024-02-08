import { useEffect, useState } from "react";
import "./learning.scss";

const Learning = () => {
  const [row1, setRow1] = useState();
  const [row2, setRow2] = useState();
  const [lan, setLan] = useState();
  let move = 300;

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);

      if (window.scrollY > 980) {
        setRow1({
          left: `${(Math.sqrt(window.scrollY))}px`,
        });
        setRow2({
          bottom: "10vh",
          right: "20vw",
        });
      } else {
        setRow1({
          // top: "-10vh",
          // left: `${move -= 20}px`,
        });
        setRow2({});
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="learning1">
      <div className="row1 row" style={row1}>
        <div className="lan">Java Script</div>
        <div className="lan">Java Script</div>
        <div className="lan">Java Script</div>
        <div className="lan">Java Script</div>
        <div className="lan">Java Script</div>
        <div className="lan">Java Script</div>
      </div>
      <div className="topic">
        <div className="heading">
          <h3>MY LEARNING</h3>
        </div>
        <p className="desc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
          reprehenderit numquam mollitia voluptatum molestias! Molestias
          delectus, necessitatibus voluptatem similique aliquam harum eos ad
          reprehenderit enim sit odit inventore. Esse facere harum doloribus
          commodi magnam voluptatum praesentium eveniet, quas aperiam ipsam quod
          voluptatem ullam cupiditate non tempora! Pariatur animi eligendi
          error?
        </p>
      </div>
      <div className="row2 row" style={row2}>
        <div className="lan">Java </div>
        <div className="lan">Java </div>
        <div className="lan">Java </div>
        <div className="lan">Java </div>
        <div className="lan">Java </div>
        <div className="lan">Java </div>
      </div>
    </div>
  );
};

export default Learning;
