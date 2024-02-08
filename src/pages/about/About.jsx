import './About.scss'
import about from '../../assets/about.png'

const About = () => {
    return (
        <div id='about'>
            <div className="left">
                <img src={about} alt="" />
                <span></span>
            </div>
            <div className="right">
                <h2>About!</h2>
                <p className='typing'>I am <span>Developer</span></p>
                <p className='text'>A versatile full-stack developer with expertise in both front-end and back-end technologies. Proficient in React, Node.js, and databases like MongoDB, I excel at creating seamless and engaging web applications. My strength lies in bridging the gap between design and functionality, ensuring a holistic approach to development. Committed to continuous learning and staying updated with industry trends, I bring a passion for innovation and collaboration. I'm excited about contributing to impactful projects and leveraging my skills to deliver high-quality solutions. Let's connect and explore how I can add value to your team!</p>
            </div>
        </div>
    )
}

export default About