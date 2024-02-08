import './Projects.scss'
import web1 from '../../assets/web1.png'
import web2 from '../../assets/web2.png'
import web3 from '../../assets/web3.png'
import web4 from '../../assets/web4.png'
import web5 from '../../assets/web5.png'
const Projects = () => {
    return (
        <div id='project'>

            <h1>Projects</h1>
            <div className="ctr-accordion">
                <div className="tab">
                    <div className="scroll">

                        <img src={web1} alt="" />
                    </div>
                </div>
                <div className="tab">
                    <img src={web2} alt="" />
                </div>
                <div className="tab">
                    <img src={web3} alt="" />
                </div>
                <div className="tab">
                    <img src={web4} alt="" />
                </div>
                <div className="tab">
                    <img src={web5} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Projects