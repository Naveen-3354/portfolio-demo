import './Hero.scss'
import hero from '../../assets/hero.png'
import { useState, useEffect } from 'react'

const Hero = () => {
  const [name, setName] = useState({})
  const [topic, setTopic] = useState({})

  useEffect(() => {

    const handleScroll = () => {
      // console.log(window.scrollY);
      if (window.scrollY > 600) {
        setName({
          animationName: "none"
        })
        setTopic({
          animationName: "none"
        })
        // console.log("zdchjgdzj");
      }
      else {
        setName({
          animationName: 'hero-name-ani',
          animationDuration:'0.8s'
        })
        setTopic({
          animationName: 'hero-topic-ani',
          animationDuration:'1s'
        })

      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div id='hero'>
      <div className="content">
        <div className="one"></div>
        <div className="two"></div>
        <div className="name" >
          <h1 id='name' style={name}>Naveen</h1>
          <p id="under1" ></p>
          <p id='under3'></p>
          <h1 id='topic' style={topic}>Dev</h1>
          <p id='under5'></p>
          <p id='under2'></p>
          <p id='under4'></p>
        </div>
        <div className="three"></div>
        <div className="four"></div>
        <img src={hero} alt="" />
      </div>
    </div>
  )
}

export default Hero