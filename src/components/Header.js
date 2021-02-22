import React from 'react'
import Typed from "react-typed"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faLinkedin} from '@fortawesome/free-brands-svg-icons';

const Header = () => {
    return (
            <div className="header-wraper">
            <div className="main-info">
                <h1>Hi, I am Zsolt</h1>
                <div className="middle"></div>
                <Typed
               className="typed-text"
               strings={["cyber security and cloud enthusiast.", "self-taught developer.", "learning new technologies every day."]}
               typeSpeed={50}
               backSpeed={50}
               loop
                />
              
                 <div className="button-div">
                {/* <Link smooth={true} to="contacts" offset={-50} className="btn-main-offer" href="#">contact me</Link> */}
                {/* <a href="#" className="btn-main-offer">download cv</a><br></br> */}
                <a href="https://github.com/zsoltszakal" target="_blank"><FontAwesomeIcon className="header-icon" icon={faGithub} size="2x" /></a>
                <a href="https://www.linkedin.com/in/zsolt-szakal" target="_blank"><FontAwesomeIcon className="header-icon" icon={faLinkedin} size="2x" /></a>
                <a href="https://twitter.com/ZsoltSzakal1" target="_blank"><FontAwesomeIcon className="header-icon" icon={faTwitter} size="2x" /></a>
            </div>
            <div className="headerdiv"></div>
            </div>


            </div>
    )
}

export default Header
