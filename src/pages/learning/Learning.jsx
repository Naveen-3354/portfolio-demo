import './Learning.scss'
import React, { useState, useEffect } from 'react';


const Learning = () => {
  const [row1, setrow1] = useState({})
  const [row2, setrow2] = useState({})

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1430) {
        setrow1({
          animationName: "learn-row1-450px",
          animationDuration: '2s',
          opacity: '1'
        })
        setrow2({
          animationName: "learn-row2-450px",
          animationDuration: '3s',
          opacity: '1'
        })

      }
      else {
        setrow1(({}))
        setrow2({})
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, []);

  return (
    <div id='learn'>
      <div className="left">
        <div className="content">
          <div className="heading">
            <h1>My Learning</h1>
          </div>
          <div className="para">
            <p>I have been ful stack development for past one and half years. And created a couple of works for learning and some of with my ungrown brain. You can see, what I had learn until now.</p>
          </div>
          <div className="skill">
            <div className="rows">
              <div className="row row1">
                <div className="python">
                  <h3 className>Python Python</h3>
                </div>
                <div className="python" style={{ width: "70px" }}>
                  <h3 className>Java Java</h3>
                </div>
                <div className="python">
                  <h3 className>JavaScript JavaScript</h3>
                </div>
                <div className="python" style={{ width: "70px" }}>
                  <h3 className>Dart Dart</h3>
                </div>
              </div>
              <div className="row row2">
                <div className="python" style={{ width: "70px" }}>
                  <h3 className>React React</h3>
                </div>
                <div className="python">
                  <h3 className>SpringBoot SpringBoot</h3>
                </div>
                <div className="python" style={{ width: "70px" }}>
                  <h3 className>Flask Flask</h3>
                </div>
                <div className="python">
                  <h3 className>Flutter Flutter</h3>
                </div>
              </div>
              <div className="row row3">
                <div className="python" style={{ width: "70px" }}>
                  <h3 className>Github Github</h3>
                </div>
                <div className="python">
                  <h3 className>MongoDB MongoDB</h3>
                </div>
                <div className="python" style={{ width: "70px" }}>
                  <h3 className>AWS AWS</h3>
                </div>
                <div className="python">
                  <h3 className>Angular Angular</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="img"></div>
      </div>
    </div>
  )
}

export default Learning