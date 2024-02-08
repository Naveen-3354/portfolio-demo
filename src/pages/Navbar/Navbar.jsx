import './Navbar.scss'
import React, { useEffect, useState } from 'react';
import navlogo from "../../assets/app1.png"

const Navbar = () => {
    const [drop, setDrop] = useState({})
    const [dropTrue, setDropture] = useState(true)
    const [paratag, setParatag] = useState({});
    const [img, setImg] = useState({})
    const [contant, setcontant] = useState({})

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setcontant({
                    width: "40px",
                    borderRadius: '50%',
                    backgroundColor: '#F3EEEA',
                    padding: '0',
                    transition: 'width 0.5s, border-radius 2s,background-color 0.5s'
                })
                setParatag({
                    // opacity: 0,
                    // display: 'none',
                })
                setImg({
                    display:"block"
                })
                setDropture(true)
            }
            else {
                setcontant({
                    transition: 'width 1s, border-radius 0.2s'
                })
                setParatag({
                    opacity: 1,
                    transition: 'opacity 2s'
                })
                setImg({})
                setDrop({ display: "none" })
                setDropture(false)
            }
        };
        const handleResize = () => {
            if (window.innerWidth < 400) {
                setDropture(true)
                setImg({
                    display:"block"
                })
            }
            else {
                setDropture(false)

                setImg({})
                setDrop({ display: "none" })
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleClick = () => {
        if (dropTrue === true) {
            setDrop({
                display: "flex"
            })
            setDropture(!dropTrue)
        }
        if (dropTrue === false) {

            setDrop({
                display: "none"
            })
            setDropture(true)
        }
    }
    const handleScroll = () => {
        const halfPagePosition = window.innerHeight * 1; // Scroll to half the page
        window.scrollTo({
          top: halfPagePosition,
          behavior: 'smooth', // Add smooth scrolling animation
        });
      };
    return (
        <div id="navbar">
            <div className="contant" style={contant}>
                <div className="left" style={paratag}>
                    <a href='#'>Naveen</a>
                </div>
                <div className="right" style={paratag}>
                    <p onClick={handleScroll}>About</p>
                    <p >Learning</p>
                    <p >Projets</p>
                    <p >Contact</p>
                </div>
                <div className="dropdown" onClick={handleClick}>
                    <img src={navlogo} style={img} alt="" />
                    <div className="dropdown-content" style={drop} >
                        <p onClick={()=>{window.scrollTo({top:0,behavior:"smooth"})}}>Home</p>
                        <p onClick={handleScroll}>About</p>
                        <p href="#">Learning</p>
                        <p href="#">Projets</p>
                        <p href="#">Contact</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar