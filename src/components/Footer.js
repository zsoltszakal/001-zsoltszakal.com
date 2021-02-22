import React from "react";
import { 
    TwitterIcon,
    LinkedinIcon,
    TelegramIcon,

 } from "react-share";
 import { Link } from "react-scroll";
 import { faGithub} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                    <div classNam="d-flex">
                            <p>Zsolt Szakal</p>
                        </div>
                        <div classNam="d-flex">
                            <p>Bournemouth, United Kingdom</p>
                        </div>
                        <div classNam="d-flex">
                        
                            
                        </div>
                        <div classNam="d-flex">
                            <a href="mailto:zsolt@zsoltszakal.com">zsolt@zsoltszakal.com</a>
                            <br />
                            <br />
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <Link smooth={true} to="header" offset={-50} href="#">Home</Link>
                                <br />
                                <Link smooth={true} to="about" offset={-47} href="#">About</Link>
                                <br />
                            </div>
                            <div className="col">
                            <Link smooth={true} to="skills" offset={-48} href="#">Skills</Link>
                                <br />
                                <Link smooth={true} to="project" offset={-48} href="#">Projects</Link>                         
                                 <br />
                                <br />
                                <br />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                        <div className="d-flex justify-content-center">                        
                        <a href="https://twitter.com/ZsoltSzakal1"><TwitterIcon className="mx-3" size={36} /></a>  
                        <a href="https://www.linkedin.com/in/zsolt-szakal-130050202/"><LinkedinIcon className="mx-3" size={36}/></a>
                        <a href="https://t.me/zsoltszakal"><TelegramIcon className="mx-3" size={36} /></a>                 
                        </div>
                        <p className="pt-3 text-center"> Copyright © &nbsp; 
                        {new Date().getFullYear()} &nbsp;
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer